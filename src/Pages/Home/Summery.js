import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { GoCommentDiscussion } from 'react-icons/go';
import { BsBoxSeam } from 'react-icons/bs';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Summery = () => {
  const [count, setCount] = React.useState(true);
  return (
    <section className="text-gray-600 body-font bg-white">
      <div className="container px-5 py-8 mx-auto mt-[-120px]">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 bg-white px-4 py-6 rounded-lg">
              <FaUsers className="w-12 h-12 mb-3 text-primary inline-block" />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                <CountUp
                  start={count ? 0 : 200}
                  end={200}
                  duration={2.5}
                  suffix=" +"
                  onEnd={() => setCount(false)}
                >
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start}>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>

                <CountUp end={100} duration={5} />
              </h2>
              <p className="leading-relaxed">Customer</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 bg-white px-4 py-6 rounded-lg">
              <MdOutlineAttachMoney className="w-12 h-12 mb-3 text-primary inline-block" />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                <CountUp
                  start={count ? 0 : 130}
                  end={130}
                  duration={2.5}
                  suffix=" M+"
                  onEnd={() => setCount(false)}
                >
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start}>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </h2>
              <p className="leading-relaxed">Annual Revenue</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 bg-white px-4 py-6 rounded-lg">
              <GoCommentDiscussion className="w-12 h-12 mb-3 text-primary inline-block" />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                <CountUp
                  start={count ? 0 : 186}
                  end={186}
                  duration={2.5}
                  suffix=" +"
                  onEnd={() => setCount(false)}
                >
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start}>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </h2>
              <p className="leading-relaxed">Reviews</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 bg-white px-4 py-6 rounded-lg">
              <BsBoxSeam className="w-12 h-12 mb-3 text-primary inline-block" />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                <CountUp
                  start={count ? 0 : 46}
                  end={46}
                  duration={2.5}
                  onEnd={() => setCount(false)}
                >
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start}>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </h2>
              <p className="leading-relaxed">Parts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summery;
