console.log('Third Project');

//Initilize the the news api parameters
let apiKey = '50a634d0807645cc83fb4aebdb4a6a12';
let sources = 'bbc-news';

//Grab the news container
let newsAccordion = document.getElementById('newsAccordion');


//Create an ajex get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {

        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        let newsHtml = "";
        articles.forEach(function(elemnet, index) {

            let news = ` <div class="card">
            <div class="card-header" id="heading${index}">
                <h2 class="mb-0">
                    <button class="btn btn-link  collasped" type="button" data-toggle="collapse"
                        data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                        <b>Breaking News ${index+1}: </b>${elemnet['title']}
                    </button>
                </h2>
            </div>
            
            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
            <div class="card-body"> ${elemnet['content']}. <a href=${elemnet['url']} target="_blank">read more here.</a></div>
            </div>
            </div>`
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured");  
    }
}
xhr.send();

