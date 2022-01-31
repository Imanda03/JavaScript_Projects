console.log('Third Project');

//50a634d0807645cc83fb4aebdb4a6a12


//Grab the news container
let newsAccordion = document.getElementById('newsAccordion');


//Create the get request
const xhr = new XMLHttpRequest();
xhr.open('POST', 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=50a634d0807645cc83fb4aebdb4a6a12', true);
xhr.getResponseHeader('Content-type', 'application/json');

let news = ` <div class="card">
<div class="card-header" id="headingOne">
    <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
            data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Collapsible Group Item #1
        </button>
    </h2>
</div>

<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
    <div class="card-body">
        Some placeholder content for the first accordion panel. This panel is shown by default, thanks to
        the <code>.show</code> class.
    </div>
</div>
</div>`