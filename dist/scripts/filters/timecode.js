(function() {
    function timecode() {
        return function(timestamp) {
            
            var time = new Date(timestamp);
            
            var h = time.getHours();
            var m = time.getMinutes();
            var meridiem = 'am';
            
            if (h >= 12) {
                h -= 12;
                meridiem = 'pm';
            }
            
            if (h == 0) {
                h = 12;
            }
            
            var output = h + ':';

            if (m < 10) {
                output += '0';   
            }

            output += (m + " " + meridiem);
            
            return output;
        };
    }
    
    angular
        .module('blocChat')
        .filter('timecode', timecode);
})();