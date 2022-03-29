import React from "react";
import './BeforeAbout.css'

function BeforeAbout() {
  return (
    <div className="main_div"  style={{
        display: "flex",
        textAlign: "left",
        margin: "150px",
        marginTop: "10px",
        fontSize: "14px",
            lineHeight: "18px",
            fontFamily: "Arial",
      }} >
      <div style={{ border: "1px solid red", width: "70%" }}>
        <h2 className="main-title">
          Lose Weight with MyFitnessPal.com — for FREE!
        </h2>
        <hr />
        <div
          style={{
            fontSize: "14px",
            lineHeight: "18px",
            marginBottom: "18px",
            fontFamily: "Arial",
          }}
        >
          <p>
            Losing weight isn't easy - we know. But with a membership to
            MyFitnessPal.com, you'll get the tools you need to successfully take
            weight off - and keep it off. And best of all, you can signup for
            free, no strings attached. So put away your credit card - you'll
            never have to pay a cent.
          </p>
          <p>
            Study after study has confirmed the benefits of keeping track of the
            food you eat and the activity you do. It's simple - the more
            consistently you track your food intake, the more likely you are to
            lose weight. That's why every successful weight management program
            suggests that you keep a food diary and/or an activity log. But
            recording everything you eat without the right tools can be tedious
            at best, or simply impossible at worst.
          </p>
          <p>
            At MyFitnessPal.com, we focus on making sure you can log your meals
            as quickly and easily as possible. Because the easier we make it for
            you, the more likely you are to stay on track, and the more likely
            you are to succeed in your weight loss goals.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            height: "250px",
            backgroundColor: "#f6f6f6",
            border: "1px solid red",
            marginTop: "60px",
            marginBottom: "60px",
            gap: "30px",
          }}
        >
          <div>
            <img
              src="https://www.myfitnesspal.com/assets/img-about-us.png"
              alt=""
            />
          </div>
          <div>
            <h4 style={{ color: "blue", fontSize: "14px",
            lineHeight: "18px",
            marginBottom: "18px",
            fontFamily: "Arial", }}>How does it work?</h4>
            <p>
              The reason our system is so easy to use is because{" "}
              <strong>it learns from you!</strong> remembers what you've eaten
              and done most often in the past, and makes it easy for you to add
              those foods again to your log.
            </p>
          </div>
        </div>
          <h4 style={{color:"blue"}}>With a FREE membership you get:</h4>
          <ul style={{listStyleType:"disc"}}>
              <li>
                  <span><strong>The easiest to use food diary on the web -</strong>Track what you eat with just a few clicks from anywhere with an internet connection - at home or at work</span>
              </li>
              <li>
                  <span><strong>  A searchable food database of over 300,000,000 items -</strong>  and it's growing every day!</span>
              </li>
              <li>
                  <span><strong>Your own personal food database -</strong>add your own foods and recipes at any time and access them from anywhere with an internet connection</span>
              </li>
              <li>
                  <span><strong>Free mobile apps for iPhone and Android -</strong>so you can log your meals and exercise even when you are on the go</span>
              </li>
              <li>
                  <span><strong>Support and motivation  </strong>from people just like you - Our discussion forums let you learn from others, share your own tips, receive and give encouragement, and make friends.</span>
              </li>
              <li>
                  <span><strong>A personalized diet profile</strong>- customized to your unique weight loss goals.</span>
              </li>
              <li>
                  <span><strong>Support and motivation  </strong>- our system can support any diet like Atkins, the South Beach Diet, the Zone, and more. No matter what diet you're on, we can help.</span>
              </li>
          </ul>
      </div>
      <div style={{ border: "1px solid red", width: "30%" }}>BeforeAbout</div>
    </div>
   
  );
}

export default BeforeAbout;
