import React from "react";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import StarIcon from "@mui/icons-material/Star";
import { featureData } from "./featureData";

export const Feature = () => {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-md-4 d-flex flex-column  align-items-center mb-sm-0 mb-4">
          <CalendarMonthOutlinedIcon className="mb-2" />
          <h3>Enjoy 30 day trial</h3>
          <p className="text-center">
            We know you'll love your trailed. If you buy one and decide it’s not
            for you, return it for a full refund. T&C apply
          </p>
        </div>
        <div className="col-md-4 d-flex flex-column  align-items-center mb-sm-0 mb-4">
          <div className="d-flex mb-2">
            <StarIcon className="" />
            <StarIcon className="" />
            <StarIcon className="" />
            <StarIcon className="" />
            <StarOutlineOutlinedIcon className="" />
          </div>
          <h3>Warranty</h3>
          <p className="text-center">
            We offer a warranty of up to 6 years on select luggage and one year
            on our bags & backpacks.
          </p>
        </div>
        <div className="col-md-4 d-flex flex-column  align-items-center">
          <PaymentsOutlinedIcon className="mb-2" />
          <h3>Cash on delivery</h3>
          <p className="text-center">Order now and pay cash during delivery.</p>
        </div>
      </div>
    </div>
  );
};
