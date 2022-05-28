(() => {
  const createElementToAppendToIconBar = () => {
    const container = document.createElement('div');
    container.classList.add('sreaming-In-Kagome');
    container.innerHTML = `<a href="/posts/24129207/react?reaction_id=1" data-xf-init="tooltip" data-xf-click="sv-rate" data-rating-bar=".js-ratingBar-post24129207" data-native-reactions-bar="" data-rating-menu="false" data-original-title="Like" aria-label="Like" id="js-XFUniqueId208">				

	    <img src="https://forums.sufficientvelocity.com/data/svg/20/1/1652835034/like.svg" class="sv-rating-type-icon  sv-rating-type-icon1 sv-rating-type-icon--svg  sv-rating-type--large" alt="Like" width="24" height="24" title="Like" aria-hidden="true">

	</a>`;

    return container;
  };

  let currentUser = '';
  let youtubeLeftControls, youtubePlayer;
  let currentVideo = '';
  let currentVideoBookmarks = [];

  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type, value, videoId } = obj;

    if (type === 'NEW') {
      currentVideo = videoId;
      newVideoLoaded();
    }
  });

  const getCurrentUser = () => {
    let userLink = document.querySelector('span.p-navgroup-linkText');
    return userLink.innerText;
  };

  const newVideoLoaded = () => {
    const screamingInKagome =
      document.getElementsByClassName('screamingInKagome')[0];

    if (!screamingInKagome) {
      getCurrentUser();
      const iconBars = document.querySelectorAll(
        'div.sv-rate-menu.sv-rate-menu--type-bar.sv-rate-menu--location-bar'
      );

      for (let icon of iconBars) {
        const classes = icon.className.split(' ').pop().split('t').pop();
        console.log(icon.parentElement.parentElement.children[0]);
        const screamIcon = createElementToAppendToIconBar();
        icon.appendChild(screamIcon);
        screamIcon.onclick = () => {
          icon.style.display = 'none';
        };
      }
    }
  };

  newVideoLoaded();
})();
