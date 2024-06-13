import './intro.css'
import img from '../../../assets/intro_bg/4.png'
export const Intro = () => {
  return (
    <>
      <div className="intro_bg">
        <div className="anim">
          <img src={img} alt="" />
        </div>
      </div>


      <div className="intro">
        <div className="intro_content">
          <h3 className="h_1">The Anual Techno Cultural Fest</h3>
          <b>
            <h1>PRISMA 2K23</h1>
          </b>
          <div className="live">
            <h3 className="h_2">
              Now <br />
              live!
            </h3>
          </div>
          <p>
            Evenings turning into Nights, Friends turning into Family. A 2-day
            fun-filled event that will leave you with Memories of a Lifetime!
            Get Ready to witness the most Unforgettable nights of your life with
            - PRISMA 2K23
          </p>
          <div className="intro_btn">
            <button id='btn_1'>Register For Event </button>
            <button id='btn_2'>Buy Passes </button>
          </div>
        </div>
      </div>

    </>
  )
}
