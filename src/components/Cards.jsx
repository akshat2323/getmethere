import './cards.css';

function Cards() {
    return (<div className='cards '>
        <div class="card m-2">
            <img src="https://source.unsplash.com/200x100/?beach" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    </div>);
}

export default Cards;