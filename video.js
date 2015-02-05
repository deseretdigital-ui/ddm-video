var Video = function(selector, options) {
    this.selector = selector;
    this.$video = null;
    this.built = false;
    this.jw = null;
    this.settings = {
        androidhls: true,
        width: '100%',
        aspectratio: '16:9',
        stagevideo: false,
        primary: 'flash',
        preload: 'none'
    };
    $.extend(this.settings, options);
    
    this.bitwise = function(str) {
        var hash = 0;
        if (str.length == 0) {
        	return hash;
        }
        for (i = 0; i < str.length; i++) {
            char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
        }
        return hash;
    }

    this.verify = function() {
    	if (this.settings.file === undefined && this.settings.sources === undefined) {
    		return false;
    	}
    	return true;
    }

    this.build = function() {
        if (this.built === true) {
            return;
        }
        if (this.$video.attr('id') === undefined) {
            var key = this.settings.file || this.settings.source[0].file;
            this.$video.attr('id', 'video_' + this.bitwise(key));
        }
        this.jw = jwplayer(this.$video.attr('id')).setup(this.settings);
        this.built = true;
    }

    this.load = function(selector) {
        var returnValue = false;
        if (selector) {
            var $v = $(selector);
            if ($v.length && this.verify()) {
                this.$video = $v;
                this.build();
                returnValue = this;
            }
        }
        return returnValue;
    };
    
    return this.load(selector);    
};