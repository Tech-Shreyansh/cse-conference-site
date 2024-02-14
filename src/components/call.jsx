import React from "react";

const Call = () => {
  return (
    <div id="call" className="target">
      <div className="container">
        <h1 className="text-5xl mb-4 text-center text-blue-600">
          Call for Paper
        </h1>
        <p className="text-2xl text-gray-600 mb-4">
          ACET-2024 is soliciting original, previously unpublished and high
          quality research papers addressing research challenges and advances in
          the tracks mentioned below. The topics of the conference include, but
          are not limited to:
        </p>
        <div className="text-2xl text-[#000] mb-4 ">
          {" "}
          The focus area and tracks of the conference would be:
        </div>
        <div className="font-[500] text-xl text-[#000] mb-4">
          <span className="font-[500]  text-2xl text-[#000]">
            &rarr;Track 1:
          </span>{" "}
          Advances in Machine Learning and Deep Learning <br />
          <span className="font-[500]  text-2xl text-[#000]">
            &rarr;Track 2:
          </span>{" "}
          Advances in Data Science
          <br />
          <span className="font-[500]  text-2xl text-[#000]">
            &rarr;Track 3:
          </span>{" "}
          Applications of Artificial Intelligence in Interdisciplinary areas
          <br />
          <span className="font-[500]  text-2xl text-[#000]">
            &rarr;Track 4:
          </span>{" "}
          High Performance Computing
          <br />
          <span className="font-[500]  text-2xl text-[#000]">
            &rarr;Track 5:
          </span>{" "}
          Advances in Communication and Networks
          <br />
          <span className="font-[500]  text-2xl text-[#000]">
            &rarr;Track 6:
          </span>{" "}
          Advanced Algorithms
          <br />
          <span className="font-[500]  text-2xl text-[#000]">
            &rarr;Track 7:
          </span>{" "}
          Teaching & Learning Systems <br />
        </div>
      </div>
    </div>
  );
};

export default Call;
