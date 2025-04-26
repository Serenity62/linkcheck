const short_urls = [
	"bit.ly",
	"shorturl.at",
	"tinyurl.com",
	"rb.gy",
	"ow.ly",
	"d.to",
	"b.link",
	"shortio.li",
];

function isShortened(url) {
	const ans = short_urls.filter((u) => url.includes(u));
	return ans.length > 0 ? ans[0] : "";
}

function unShorten(url) {
	const newUrl = isShortened(url);
	switch (newUrl) {
		case "bit.ly":
		case "shorturl.at":
		case "tinyurl.com":
		case "rb.gy":
		case "ow.ly":
		case "d.to":
		case "b.link":
		case "shortio.li":
			return newUrl;
	}
	return url;
}

//function handleTabCreate(tab) {
function handleBeforeNavigate(details) {
	const url = details.url;
	const newUrl = unShorten(url);
	if (url !== newUrl) {
		console.log(`${url} -> ${newUrl}`);
	}
}

const filter = {
	url: short_urls.map((v) => {
		return { hostContains: v };
	}),
};

// browser.tabs.onCreated.addListener(handleTabCreate);
browser.webNavigation.onBeforeNavigate.addListener(
	handleBeforeNavigate,
	filter,
);
