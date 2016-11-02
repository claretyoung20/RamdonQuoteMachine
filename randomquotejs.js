
$(document).ready(function(){
            //my API URL
            var url = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?';
            //SetQuote function set the quote to my html paragraph and (twitter)
            var setQuote = function(data){
                $('#myquote').text(data.quoteText);
                 
                if(data.quoteAuthor === ''){
                    data.quoteAuthor = 'Unknown';
                }
                var tweetOut = 'https://twitter.com/intent/tweet?text=' + data.quoteText + ' -Author- ' + data.quoteAuthor;
                $('#author').text('-Author- '+ data.quoteAuthor);
                $('#mtTweet').attr('href',tweetOut);
            };
            
            $(document).ready(function() {
            $.getJSON(url, setQuote, 'jsonp');

          });
            $("#gQuote").click(function() {
             $.getJSON(url, setQuote, 'jsonp');
           });

});
