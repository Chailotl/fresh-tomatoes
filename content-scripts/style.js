var sheet = document.createElement('style')
sheet.innerHTML = `
#movies_sidebar .tab-content td.left_col,
.movie_list tr .left_col,
.dynamic-poster-list .score-icon-pair score-icon-critic,
#contentReviews,
.critic-score,
.tomatometer-container,
#header-top-bar-critics,
.what-to-know,
.tMeterIcon.tiny,
.movie_content_area,
#tomatometerFilter,
#tomatometer-info,
score-pairs,
score-icon-critic,
.dynamic-text-list__tomatometer-group {
	display: none !important;
}
`;
document.documentElement.appendChild(sheet);