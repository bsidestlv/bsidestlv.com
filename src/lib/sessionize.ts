/**
 * Sessionize API integration
 * Fetches speakers and schedule at build time from Sessionize.
 *
 * API base: https://sessionize.com/api/v2/0ufpqeop/view/
 */

const SESSIONIZE_ID = (import.meta.env.SESSIONIZE_ID as string | undefined) ?? '0ufpqeop';
const BASE_URL = `https://sessionize.com/api/v2/${SESSIONIZE_ID}/view`;

export interface SessionizeSocial {
  linkType: string;
  url: string;
  title: string;
}

export interface SessionizeSpeaker {
  id: string;
  fullName: string;
  bio: string;
  tagLine: string;
  profilePicture: string;
  isTopSpeaker: boolean;
  links: SessionizeSocial[];
  sessions: { id: string; name: string }[];
  firstName: string;
  lastName: string;
  questionAnswers: { question: string; answer: string; id: number }[];
}

export interface SessionizeRoom {
  id: number;
  name: string;
  sessions: SessionizeSession[];
}

export interface SessionizeSession {
  id: string;
  title: string;
  description: string;
  startsAt: string;
  endsAt: string;
  isServiceSession: boolean;
  isPlenumSession: boolean;
  speakers: { id: string; name: string }[];
  categories: { id: number; name: string; categoryItems: { id: number; name: string }[] }[];
  roomId: number;
  room: string;
}

export interface SessionizeGrid {
  date: string;
  rooms: SessionizeRoom[];
  timeSlots: {
    slotStart: string;
    rooms: { id: number; session: SessionizeSession | null; roomId: number }[];
  }[];
}

let _speakers: SessionizeSpeaker[] | null = null;
let _schedule: SessionizeGrid[] | null = null;

async function fetchJSON<T>(url: string, label: string): Promise<T | null> {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`[sessionize] ${label}: HTTP ${res.status}`);
      return null;
    }
    const ct = res.headers.get('content-type') ?? '';
    if (!ct.includes('application/json')) {
      console.warn(`[sessionize] ${label}: expected JSON but got "${ct}" — API may be unavailable`);
      return null;
    }
    return (await res.json()) as T;
  } catch (e) {
    console.warn(`[sessionize] ${label}: ${e instanceof Error ? e.message : String(e)}`);
    return null;
  }
}

export async function getSpeakers(): Promise<SessionizeSpeaker[]> {
  if (_speakers) return _speakers;
  _speakers = (await fetchJSON<SessionizeSpeaker[]>(`${BASE_URL}/Speakers`, 'speakers')) ?? [];
  return _speakers;
}

export async function getSchedule(): Promise<SessionizeGrid[]> {
  if (_schedule) return _schedule;
  _schedule = (await fetchJSON<SessionizeGrid[]>(`${BASE_URL}/GridSmart`, 'schedule')) ?? [];
  return _schedule;
}

/** Returns all sessions flattened across rooms and days */
export async function getAllSessions(): Promise<SessionizeSession[]> {
  const grid = await getSchedule();
  const sessions: SessionizeSession[] = [];
  for (const day of grid) {
    for (const room of day.rooms) {
      for (const session of room.sessions) {
        if (!session.isServiceSession) {
          sessions.push(session);
        }
      }
    }
  }
  // Deduplicate by id
  const seen = new Set<string>();
  return sessions.filter((s) => {
    if (seen.has(s.id)) return false;
    seen.add(s.id);
    return true;
  });
}

/** Slugify a name for URL use */
export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
