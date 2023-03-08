import React from "react";
import s from "../Discount/discount.module.css";
import greenPlant from "../../assets/greenF.png";

export default function Discount() {
  return (
    <div className={s.discountSection}>
      <div className={s.greenImg}>
        <img src={greenPlant}></img>
      </div>
      <div className={s.containerGreen}>
        <div className={s.greenText}>
          <h3>
            | <u>The Importance of Renewal Pruning</u>
          </h3>
          <p>
            The key to a successful renewal is to cut out the oldest stems about
            every third year. Simply cutting out the oldest, fattest stems of an
            overgrown shrub, allows for younger, thinner stems to remain in
            place to flower and fruit. This will keep the growth in balance and
            maintain the best flowering and fruiting all while keeping the
            natural shape and size of the shrub!
          </p>
          <p>
            By removing older, diseased, neglected, damaged, and/or less
            productive stems, you make room for younger and more vigorous ones.
            You open up the plants with better air circulation and stimulate
            better flowering and fruiting. Cleaning out the interior of a plant
            eliminates the ‘rats nest’ of any build-up of dead leaves, trash,
            broken twigs, and branches, and removes hiding spots for disease,
            fungus, and insects.
          </p>
        </div>

        <div className={s.greenText}>
          <h3>
            |<u>Plant Security</u>
          </h3>
          <p>
            Every plant from The Green Darwin™ comes protected by code testers
            providing you with plants free of invasive pests & diseases. That
            means plants arrive safe & healthy at your doorstep.
          </p>
        </div>
      </div>
    </div>
  );
}
