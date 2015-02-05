var KSLVideo = function(selector, options) {
	var settings = {
		skin: 'bekle',
        displaytitle: false,
        sitecatalyst: {
            mediaName: '' // same as title or ?
        },
        advertising: {
            client: 'vast',
			tag: '',
            admessage: '', // During linear ad playback, JW Player shows the following message in the controlbar: Ad: your video resumes in XX seconds. Use this option to customize that message.
            companiondiv: {
                id: 'video-companion-2',
                width: 300,
                height: 250
            },
            schedule: {
                adbreak1: {
                    offset: 'pre',
                    tag: ''
                },
                adbreak2: {
                    offset: 'post',
                    tag: ''
                }
            },
            skipoffset: 60
        },
        sharing: {
            code: encodeURI("<iframe frameborder='0' width='640' height='360' src='http://www.ksl.com/api/jwplayer/player.php?file=http://www.youtube.com/watch?v=IXshQ5mv1K8&rel=0&image=http://i.ytimg.com/vi/IXshQ5mv1K8/maxresdefault.jpg&width=640&height=360'></iframe>"),
            link: '',
            heading: '' // Short, instructive text to display at the top of the sharing screen. The default is Share Video. Also is displayed as a tooltip for the sharing icon.
        },
        logo: {
        	file: '',
        	link: ''
        }       
    };
	$.extend(settings, options);
	var video = new Video(selector, settings);
    return video;
};