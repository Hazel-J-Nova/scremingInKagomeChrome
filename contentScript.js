(() => {
  const createElementToAppendToIconBar = () => {
    const container = document.createElement('div');
    container.classList.add('sreaming-In-Kagome');
    container.innerHTML = `<a href="/posts/24129207/react?reaction_id=1" data-xf-init="tooltip" data-xf-click="sv-rate" data-rating-bar=".js-ratingBar-post24129207" data-native-reactions-bar="" data-rating-menu="false" data-original-title="Like" aria-label="Like" id="js-XFUniqueId208">				

	    <img src="https://forums.sufficientvelocity.com/data/svg/20/1/1652835034/like.svg" class="sv-rating-type-icon  sv-rating-type-icon1 sv-rating-type-icon--svg  sv-rating-type--large" alt="Like" width="24" height="24" title="Like" aria-hidden="true">

	</a>`;

    return container;
  };
  const removeIcon = (postNumber) => {
    const container = document.createElement('div');
    container.classList.add(`remove-${postNumber}`);
    container.innerHTML = `<button href=javascript:void(0); class="button--link button--sv-rate button " aria-haspopup="true" '
    )} ><span class="button-text">Remove</span></button>`;
    container;
    return container;
  };
  const buildNewIconCountBar = (postNumber) => {
    const newUl = document.createElement('ul');
    newUl.classList = 'sv-rating-bar__ratings';
    newUl.innerHTML = `<li class="sv-rating sv-rating--visitor-rating">
		<a data-xf-click="overlay" href="/posts/24163732/reactions?reaction_id=1"
		   rel="nofollow"
			title="Like"			
		    rel="nofollow"
			data-cache="false">
			<div class="sv-rating__icon">
	<img src="https://forums.sufficientvelocity.com/data/svg/20/1/1654087801/like.svg"
		 class="sv-rating-type-icon  sv-rating-type-icon1 sv-rating-type-icon--svg   sv-rating-type--small"
		 alt="Like"
		 width="24" height="24"
		 title="Like"
		 aria-hidden="true">
			</div>
			<div class="sv-rating__count sv-rating__count-${postNumber}">
				1
			</div>
      </a>`;
    return newUl;
  };
  const screamingInKagomeInRatingCount = (postNumber, ratingCount = 1) => {
    const screaming = document.createElement('li');
    screaming.classList.add('sv-rating', 'sv-rating--visitor-rating');
    screaming.innerHTML = `	<a data-xf-click="overlay" href="/posts/24163732/reactions?reaction_id=1"
		   rel="nofollow"
			title="Like"			
		    rel="nofollow"
			data-cache="false">
			<div class="sv-rating__icon">
	<img src="https://forums.sufficientvelocity.com/data/svg/20/1/1654087801/like.svg"
		 class="sv-rating-type-icon  sv-rating-type-icon1 sv-rating-type-icon--svg   sv-rating-type--small"
		 alt="Like"
		 width="24" height="24"
		 title="Like"
		 aria-hidden="true">
			</div>
			<div class="sv-rating__count sv-rating__count-${postNumber}">
				${ratingCount}
			</div>
      </a>`;
    return screaming;
  };

  const allIconsToDisplay = (postNumber) => {
    const iconDiv = document.createElement('div');
    iconDiv.classList.add('sv-rating-bar__rate');
    iconDiv.innerHTML = `<div class="sv-rate-menu sv-rate-menu--type-bar sv-rate-menu--location-bar js-ratingMenu-post${postNumber}" data-xf-init="sv-touch-detect">
					<a href="/posts/${postNumber}/react?reaction_id=1" data-xf-init="tooltip" data-xf-click="sv-rate" data-rating-bar=".js-ratingBar-post${postNumber}" data-native-reactions-bar="" data-rating-menu="false" data-original-title="Like" aria-label="Like" id="js-XFUniqueId73">
	<img src="https://forums.sufficientvelocity.com/data/svg/20/1/1654114227/like.svg" class="sv-rating-type-icon  sv-rating-type-icon1 sv-rating-type-icon--svg  sv-rating-type--large" alt="Like" width="24" height="24" title="Like" aria-hidden="true">
					</a>
					<a href="/posts/${postNumber}/react?reaction_id=9" data-xf-init="tooltip" data-xf-click="sv-rate" data-rating-bar=".js-ratingBar-post${postNumber}" data-native-reactions-bar="" data-rating-menu="false" data-original-title="Hugs" aria-label="Hugs" id="js-XFUniqueId74">	
	<img src="https://forums.sufficientvelocity.com/data/svg/20/1/1654114227/hug.svg" class="sv-rating-type-icon  sv-rating-type-icon9 sv-rating-type-icon--svg  sv-rating-type--large" alt="Hugs" width="24" height="24" title="Hugs" aria-hidden="true">
					</a>
					<a href="/posts/${postNumber}/react?reaction_id=8" data-xf-init="tooltip" data-xf-click="sv-rate" data-rating-bar=".js-ratingBar-post${postNumber}" data-native-reactions-bar="" data-rating-menu="false" data-original-title="Informative" aria-label="Informative" id="js-XFUniqueId75">
	<img src="https://forums.sufficientvelocity.com/data/svg/20/1/1654114227/informative.svg" class="sv-rating-type-icon  sv-rating-type-icon8 sv-rating-type-icon--svg  sv-rating-type--large" alt="Informative" width="24" height="24" title="Informative" aria-hidden="true">
					</a>
					<a href="/posts/${postNumber}/react?reaction_id=11" data-xf-init="tooltip" data-xf-click="sv-rate" data-rating-bar=".js-ratingBar-post${postNumber}" data-native-reactions-bar="" data-rating-menu="false" data-original-title="Insightful" aria-label="Insightful" id="js-XFUniqueId76">
	<img src="https://forums.sufficientvelocity.com/data/svg/20/1/1654114227/insightful.svg" class="sv-rating-type-icon  sv-rating-type-icon11 sv-rating-type-icon--svg  sv-rating-type--large" alt="Insightful" width="24" height="24" title="Insightful" aria-hidden="true">
					</a>
					<a href="/posts/${postNumber}/react?reaction_id=7" data-xf-init="tooltip" data-xf-click="sv-rate" data-rating-bar=".js-ratingBar-post${postNumber}" data-native-reactions-bar="" data-rating-menu="false" data-original-title="Funny" aria-label="Funny" id="js-XFUniqueId77">
	<img src="https://forums.sufficientvelocity.com/data/svg/20/1/1654114227/funny.svg" class="sv-rating-type-icon  sv-rating-type-icon7 sv-rating-type-icon--svg  sv-rating-type--large" alt="Funny" width="24" height="24" title="Funny" aria-hidden="true">

					</a>
	</div>`;
    return iconDiv;
  };

  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type, value, videoId } = obj;
    addingScreamingIcons();
  });

  const getCurrentUser = () => {
    let userLink = document.querySelector('span.p-navgroup-linkText');
    return userLink.innerText;
  };

  const addingScreamingIcons = () => {
    const screamingInKagome =
      document.getElementsByClassName('screamingInKagome')[0];

    if (!screamingInKagome) {
      const currentUser = getCurrentUser();

      const iconBars = document.querySelectorAll(
        'div.sv-rate-menu.sv-rate-menu--type-bar.sv-rate-menu--location-bar'
      );

      for (let icon of iconBars) {
        const postNumber = icon.className.split(' ').pop().split('t').pop();

        const remove = removeIcon(postNumber);
        const newIconUl = buildNewIconCountBar(postNumber);
        if (icon.children[0].children[0].tagName === 'SPAN') {
          return;
        } else {
          const iconRatingsBars = document.querySelector(
            `.sv-rating-bar.sv-rating-bar--ratings-left.js-ratingBar-post${postNumber}.sv-rating-bar--under-controls.sv-rating-bar--menu-bar`
          );
          const iconDiv = icon.children[0];

          remove.onclick = () => {
            let count = document.querySelector(
              `.sv-rating__count-${postNumber}`
            );
            if (count && count.innerText === '1') {
              if (document.querySelector(`.remove-${postNumber}`)) {
                const screamIcon = createElementToAppendToIconBar();
                document.querySelector(`.remove-${postNumber}`).remove();
                const iconDisplay = document.querySelector(
                  `.sv-rate-menu.sv-rate-menu--type-bar.sv-rate-menu--location-bar.js-ratingMenu-post${postNumber}`
                );

                const allIcons = allIconsToDisplay(postNumber);
                iconDisplay.appendChild(allIcons);

                iconDisplay.appendChild(screamIcon);
              }
            }
          };

          const screamIcon = createElementToAppendToIconBar();
          icon.appendChild(screamIcon);
          screamIcon.onclick = () => {
            icon.children[0].innerHTML = '';
            icon.innerHTML = '';
            icon.appendChild(remove);
            if (iconRatingsBars.children[0].tagName !== 'UL') {
              iconRatingsBars.prepend(newIconUl);
            } else {
              const ratingScreamIcon =
                screamingInKagomeInRatingCount(postNumber);
              iconRatingsBars.children[0].appendChild(ratingScreamIcon);
            }
          };
        }
      }
    }
  };
})();
// <div class="sv-rate-menu sv-rate-menu--type-bar sv-rate-menu--location-bar js-ratingMenu-post24175612" data-xf-init="sv-touch-detect"></div>
