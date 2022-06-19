---

title: Live!

aliases:
     - /live
     - /live/track1

---
# BSidesTLV 2022 - Track 1 - Jungle

<div class="row">
	<div class="col-xs-12" id="ytplayer" style=" --aspect-ratio: 16/9;
  max-width: 85%;
  margin: 0px auto;"></div>
</div>
&nbsp;
<center><a href={{< relref "/live/track2" >}}>Watch Track 2</>

<div class="row">
  <div class="col-xs-12" id="slack">
      {{< button-link
      url="//slack.bsidestlv.com"
      label="Slack Lobbycon"
      icon="slack"
      target="_blank" >}}
  </div>
  <div class="col-xs-12 col-md-offset-3 col-md-6" id="mirror"></div>
  <div class="col-xs-12">
    {{% partners categories="platinum,gold,silver,bronze,partners" %}}{{% /partners %}}
  </div>
</div>

<script>
  function onYouTubePlayerAPIReady() {
    new YT.Player('ytplayer', {
      videoId: 'G6A9HQREflM'
    });
  }
</script>