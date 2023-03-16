// /* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaPlusSquare } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Editor from "react-simple-code-editor";
import CodeEditor from "react-simple-code-editor";
import { getBlog } from "../redux/actions/blogAction";
import { useDispatch, useSelector } from "react-redux";
// import { Markup } from "interweave";
import Footer from "../components/Footer";
import HomeNavBar from "../components/HomeNavBar";
import MenuReponsive from "../components/MenuReponsive";
import { datify } from "../utils/textify";
import "../css/BlogShelfPage.css";

const BlogPage = () => {
  const [menuRepo, setMenuRepo] = useState(false);
  const [code, setCode] = useState(`function add(a, b) {\n return a + b; \n}`);

  const [active, setActive] = useState(false);

  const { blog } = useSelector((state) => state.blog);

  const param = useParams();
  const paramId = param.id.split("-");

  const id = paramId[paramId.length - 1];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlog(id));
  }, [dispatch, id]);

  const timeLimit = () => {
    return blog && Math.round((15 * blog.blogContent.length) / 9 / 1500);
  };

  const navigation = (e) => {
    if (!e.target.classList.contains(".menu")) {
      if (active) {
        setActive(false);
      }
    }
  };

  return (
    <div className="blog-page" onClick={navigation}>
      <HomeNavBar
        setMenuRepo={setMenuRepo}
        menuRepo={menuRepo}
        active={active}
        setActive={setActive}
      />
      <MenuReponsive setMenuRepo={setMenuRepo} menuRepo={menuRepo} />

      <div className="blog-container">
        {typeof timeLimit() === "number" && (
          <div className="time">
            <p>{blog && datify(blog.createdAt)}</p>
            {timeLimit() <= 1 ? (
              <p>{`${timeLimit()} min read`} </p>
            ) : (
              <p>{`${timeLimit()} mins read`} </p>
            )}
          </div>
        )}

        <div className="content">
          <h1>{blog && blog.blogTitle}</h1>
          <img src="/images/pexels-mikotoraw-photographer-3639496.jpg" alt="" />
          <br />
          <br />

          <div className="content-text">
            {/* <Markup content={blog && blog.blogContent} /> */}
            <div className="w-tc-editor-var"></div>
            <CodeEditor
              value={code}
              language="js"
              placeholder="Please enter JS code."
              onChange={(e) => setCode(e.target.value)}
              padding={15}
              style={{
                fontSize: 12,
                backgroundColor: "#f5f5f5",
                fontFamily:
                  "ui-monospace, SFMono-Regular, SF Mono, Consolas, Liberation Mono, Menlo, monospace ",
              }}
              tabIndex={300}
            />
          </div>
        </div>

        <div className="controls">
          <div className="read">
            <Link to="/shelf/1">
              <div className="arrow">
                <div className="ctn">
                  <FaChevronLeft className="ict" />
                  <div className="bar"></div>
                </div>
                PREVIOUS POST
              </div>
            </Link>
          </div>

          <Link to="/shelf">
            <FaPlusSquare className="icon" />
          </Link>

          <div className="read">
            <Link to="/shelf/1">
              <div className="arrow-right">
                PREVIOUS POST
                <div className="ctn">
                  <div className="bar"></div>
                  <FaChevronRight className="ict" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;

/* <p>
              We've learnt already in the first part of this web performance
              series why performance is important and should be budgeted for at
              every stage of product development, what benefits it holds for
              businesses and products, and the negatives of poor performance.
              Now, let's talk about the problems of web performance; what makes
              sites slow.
            </p>

            <div className="heading-paragraph">
              <h2>What makes sites slow?</h2>
              <p>
                No doubt, there's a ton of reasons why websites are slow, some
                of which are case-specific. I like to look at these factors from
                two perspectives:
              </p>
              <ul>
                <li>the user experience</li>
                <li>the developer perspective</li>
              </ul>
              <p>
                Really, the user and the developer are the two main parties
                involved in this discussion; all other factors that impact web
                performance like the network from which the site is accessed,
                the hardware specs of the device, and the software fall under
                the user factor. Same way, developers are responsible for
                whatever impacts performance on the tech part of it. So,
                basically, these two guys are the players in this game.
              </p>
              <br />
              <p>
                That being said, in this article, we'll look at things less from
                user perspective, and focus on the development side because most
                of the problems come from there, and to move forward, developers
                have to build with the users in mind and the various real-life
                situations they could be caught up in because we definitely
                can't control them; we can't move all our users to a luxury
                place with super-fast internet connection and great devices —
                that's unrealistic. So, let's jump right into what makes sites
                on the internet slow today.
              </p>
              <br />
              <p>
                Apart from network, hardware, and software limitations which are
                user factors, let's actually talk about the technical causes of
                poor performance on the front end.
              </p>
            </div>
            <div className="heading-paragraph">
              <h2>1. Third-party resources and scripts</h2>
              <p>
                It's an absolutely normal and almost inevitable practice to have
                third-party resources and scripts on our sites because we most
                of the time consume third-party content and services whether
                it's analytics, ads, social media plugins, framework/library
                resources, we use them.
              </p>
              <br />
              <p>
                However, so many times, the authors of these third-party
                resources just tell us to plug in their resources to our sites:
                resources that might depend on other resources all the way down
                or might be poorly developed, and then they serve us. The fact,
                however, remains that most of these assets are the leading cause
                of performance problems on the web because of course, we didn't
                build them, we don't know how they were built, we do not own
                them, all we want is their services and we can't determine the
                quality of these services, we can only assess them and act based
                on the information.
              </p>
              <br />
              <p>
                It's sad news that third-party resources today have taken over
                control of tons of sites that they start to have unintended
                (sometimes malicious) side effects, and as developers, most of
                the time we're just lazy to take it back. It's very common to
                see sites include a huge third-party resource, and then end up
                using a very minimal portion of it, say 5% e.g including a 20kb
                library only to end up using a component that's barely worth a
                kilobyte. That's usually not a great idea as most of these
                things can easily be implemented in-house with just a little bit
                extra work.
              </p>
            </div>
            <div className="heading-paragraph">
              <h2>2. Heavy assets and resources</h2>
              <p>
                We all have that one big file on our sites – the one big
                JavaScript asset or the pretty 1MB image from Unsplash.
                JavaScript is on top of the list of frontend resources that
                impact performance negatively, followed by images and really,
                it's difficult to keep track of these things when everyone is in
                a rush and hell-bent on results so we under-prioritize or forget
                about optmizing for performance, something that affects our
                users directly. Users know when your site is slow, they also
                know most times what sites consume a lot of their mobile data.
              </p>
              <br />
              <p>
                Engineers write code and craft experiences they find pleasing
                which more often than not is at the expense of the user —
                forgetting what the user needs and what they perceive to be a
                great experience. The user has no idea how fancy your code is or
                what shiny new tech you're using, they just want to be able to
                use your product and have a great experience doing that. And so,
                if your site is not accessible quickly, you do not even get the
                chance to show anything to the user.
              </p>
            </div>
            <div className="heading-paragraph">
              <h2>3. Excessive HTTP Requests</h2>
              <p>
                Get! Post! Frontend developers, we love to do that a lot:
                consuming APIs and all — it's fun actually, being able to
                communicate with a web server, that's pretty incredible, right?
              </p>
              <br />
              <p>
                Well, yes, it is but sure comes at a cost. Sending requests back
                and forth can quickly become overwhelming for a web server to
                handle. Imagine for a moment that you're going to get a snack
                one day at the office and then, a superior calls and says “hey,
                on your way, please get me some venti iced skinny hazelnut
                macchiato, sugar-free syrup, extra shot, light ice, no whip
                coffee”. Extremely confusing, yeah?
              </p>
              <br />
              <p>
                Similar can happen with your server when making requests. If you
                observe from that order, the entire purpose and what matters to
                you the most is getting your snack, just the way your users want
                to use your product — they want to satisfy themselves. Too bad
                their superior (engineers in this case) took that privilege away
                from them. You know how tough it can be to say no to that – same
                way the server can't say no to your multiple requests. It just
                must (or at least attempt to) process the requests regardless of
                how complicated it is.
              </p>
              <br />
              <p>
                Your user might not need all the junks and stuff you're fetching
                for them on the initial load, they need what matters, and you're
                in place to answer those questions. Identify the things you'd
                want to have on your screen quickly if you were the user.
              </p>
            </div>
            <div className="heading-paragraph">
              <h2>4. Inadequate server resources</h2>
              <p>
                One critical factor often overlooked is the capabilities of the
                web server behind a frontend. Nearly all articles and
                discussions about performance are usually focused on the
                frontend. Now, while that isn't wrong as most of the work is
                usually on the frontend, the server that powers a frontend can
                also greatly affect overall performance.
              </p>
              <br />
              <p>
                I mean, sure, you could have a pretty fast frontend but if your
                server fails to respond on time, the frontend never even makes
                it. So, what do I mean? Some servers have very high
                <a href="https://web-dev/time-to-first-byte"> TTFB</a> (Time to
                First Byte) which is the time it takes for the client get the
                first byte of response data from a server after an HTTP request,
                and so if that server's hardware (CPU, RAM etc) is inferior or
                insufficient and it takes long (more than 600ms on an average
                network) to get a response for just the main document request,
                that's a prolonged page load and so your user just stares at a
                blank screen for seconds with no sign of progress which can be
                really frustrating. Now, even when we get a response for that
                main document request, subsequent resources like scripts, css
                and images (all of which point to the server) still have to get
                their first byte of response data and fully download which can
                really slow things down.
              </p>
            </div>
            <div className="heading-paragraph">
              <h2>Conclusion</h2>
              <p>
                Now that you have a clearer view on why performance matters and
                the several factors that influence performance, including a few
                instances of not-so-good practices, in the final part of this
                series, we'll talk about known and tested strategies to tackle
                these problems.
              </p>
              <br />
              <p>
                In summary, how we build what we build matters because that's a
                huge part of the product no matter what it's later transformed
                to. That's what we serve users, and so priority should be given
                to what matters to the user, and not how quickly we can achieve
                something that might not be the best experience for users.
              </p>
            </div>
            <div className="heading-paragraph-list">
              <h2>Further Reading and Resources…</h2>
              <ul>
                <li>
                  <a
                    href="https://csswizardry.com/2018/11/css-and-network-performance/"
                    target="blank"
                  >
                    CSS and Network Performance
                  </a>
                  <span> by Harry Roberts</span>
                </li>
                <li>
                  <a
                    href="https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4"
                    target="blank"
                  >
                    The Cost of JavaScript
                  </a>
                  <span> in 2018 by Addy Osmani</span>
                </li>
                <li>
                  <a
                    href="https://developers.google.com/web/fundamentals/performance/speed-tools/"
                    target="blank"
                  >
                    How To think About Speed Tools
                  </a>
                  <span> on the Google Developers Blog</span>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=4bZvq3nodf4"
                    target="blank"
                  >
                    Progressive Performance
                  </a>
                  <span> by Alex Russell</span>
                </li>
              </ul>
            </div> */
