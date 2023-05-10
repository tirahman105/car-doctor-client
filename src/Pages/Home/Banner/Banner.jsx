import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'


const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full h-[600px]">
        <img
          src={img1}
          className="w-full rounded-xl"
        />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle bg-[#ff3811] mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-[#ff3811]">
            ❯
          </a>
        </div>
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
         <div className='text-white space-y-7 w-1/2 pl-4'>
            <h1 className='text-6xl'>Affordable Price for Car servicing</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, tempore!</p>
            <div>
            <button className="btn bg-[#ff3811]">Discover More</button>
            <button className="btn btn-outline bg-[#ff3811] ml-4">Latest Project</button>
            </div>
         </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h-[600px]">
        <img
          src={img2}
          className="w-full rounded-xl"
        />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
         <div className='text-white space-y-7 w-1/2 pl-4'>
            <h1 className='text-6xl'>Affordable Price for Car servicing</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, tempore!</p>
            <div>
            <button className="btn bg-[#ff3811]">Discover More</button>
            <button className="btn btn-outline bg-[#ff3811] ml-4">Latest Project</button>
            </div>
         </div>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-[600px]">
        <img
          src={img3}
          className="w-full rounded-xl"
        />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
         <div className='text-white space-y-7 w-1/2 pl-4'>
            <h1 className='text-6xl'>Affordable Price for Car servicing</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, tempore!</p>
            <div>
            <button className="btn bg-[#ff3811]">Discover More</button>
            <button className="btn btn-outline bg-[#ff3811] ml-4">Latest Project</button>
            </div>
         </div>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full h-[600px]">
        <img
          src={img4}
          className="w-full rounded-xl"
        />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
         <div className='text-white space-y-7 w-1/2 pl-4'>
            <h1 className='text-6xl'>Affordable Price for Car servicing</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, tempore!</p>
            <div>
            <button className="btn bg-[#ff3811]">Discover More</button>
            <button className="btn btn-outline bg-[#ff3811] ml-4">Latest Project</button>
            </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
