function isShortened(url) {
	// TODO
	return true;
}

function unShorten(url) {
	// TODO
	return url;
}

function handleTabCreate(tab) {
	const url = tab.url;
	if (isShortened(url)) {
		console.log(url);
		const newUrl = unShorten(url);
		console.log(newUrl);
	}
}

browser.tabs.onCreated.addListener(handleTabCreate);
