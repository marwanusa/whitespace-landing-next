import React from "react";
import SectionWrapper from "../SectionWrapper";
import Card from "../Card";
import { cardData } from "@/data/data";
const PlanSection = () => {
  return (
    <SectionWrapper
      sectionStyle="mainSection"
      mainStyle="mainContainer flex flex-col gap-5 items-center"
    >
      <h2 className="text-6xl font-bold text-black">Choose Your Plan</h2>
      <p className="max-w-[980px] text-black">
        Whether you want to get organized, keep your personal life on track, or
        boost workplace productivity, Evernote has the right plan for you.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 items-center">
        {cardData.map((item, idx) => {
          return (
            <div key={idx}>
              <Card
                goalsArray={item.goalsArray}
                title={item.title}
                idea={item.idea}
                price={item.price}
                type={item.type}
              />
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default PlanSection;
