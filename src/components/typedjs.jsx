import React, { useEffect } from 'react';
import Typed from 'typed.js';
import $ from 'jquery';
import 'tailwindcss/tailwind.css';

function TypedText() {
    useEffect(() => {
        var options = {
            strings: ["web developer", "App developer","Gym instructor"],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true
        };
        var typed = new Typed('.typed-text', options);
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="typed-text font-bold uppercase text-[#29a587]"></div>
    );
}

export default TypedText;


