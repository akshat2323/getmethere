import vid from '../vid.mp4';
import Navbar from './Navbar';
import Cards from './Cards';
import Footer from './Footer';
import './home.css';


function Home() {
    return (<div>
        <Navbar></Navbar>
        <div class="videoWrapper">
            <video width="" height="550" autoPlay={true} loop={true} muted={true} class="custom-video">
                <source src={vid} type="video/mp4" />
            </video>
            <hr />
        </div>
        <div className="container">
            <h1>Let's Start</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla sequi ipsam aspernatur aliquid accusantium! Dicta sunt ex explicabo nam aliquid adipisci asperiores ullam, iste mollitia. Accusantium libero ad deserunt beatae rem. Culpa beatae aspernatur, iste possimus ratione recusandae vitae iure consequuntur explicabo, qui odio laboriosam officia distinctio dicta nulla dolores debitis nam natus. Suscipit, ab cupiditate. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum expedita eaque eius nihil at molestias, ducimus, iste neque eos dolore dolor odit debitis, aliquid ab impedit pariatur asperiores illo nobis eligendi modi maiores vitae nesciunt! Dolore tempore sequi animi dolores, accusantium eos pariatur aliquid doloremque consequuntur voluptates ipsum? Magnam officiis, consequuntur minus culpa facere recusandae molestiae distinctio ad, maxime explicabo temporibus incidunt impedit deleniti rem maiores aliquam repellat officia libero numquam debitis asperiores quasi? </p>
        </div>
        <hr />
        <div className="cards-home container-fluid row">
            <h1>Top Pilgrims</h1>
            <div className="col-4">
                <Cards></Cards>
            </div>
            <div className="col-4">
                <Cards></Cards>
            </div>
            <div className="col-4">
                <Cards></Cards>
            </div>
            <div className="col-4">
                <Cards></Cards>
            </div>
            <div className="col-4">
                <Cards></Cards>
            </div>
            <div className="col-4">
                <Cards></Cards>
            </div>

        </div>
        <hr />
        <h1>Contact Us</h1>
        <div className='container'>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <a className='btn btn-success' href="#">Submit</a>
        </div>
        <Footer></Footer>

    </div>);
}

export default Home;
