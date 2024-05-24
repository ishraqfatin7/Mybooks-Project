import React from "react";
import { NavLink } from "react-router-dom";

const GlassCard = () => {
  return (
    <div className="card bg-blue-600 glass hover:text-black hover:bg-blue-700 lg:card-side text-neutral-content">
      <div className="max-w-md card-body">
        <h2 className="card-title">Garnish Your Books Here!</h2>
        <p>
          A perfect place to keep record of every book you own!
        </p>
        <div className="card-actions">
          <NavLink to ="/addBook" className="btn glass rounded-full hover:bg-blue-400 bg-yellow-400">
            Get Started
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default GlassCard;
