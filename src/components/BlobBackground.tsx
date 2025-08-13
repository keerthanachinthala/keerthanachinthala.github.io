// import { useEffect, useRef, useState } from "react";
// import { motion, useAnimation } from "framer-motion";

// const generateBlobProps = () => ({
//   top: Math.random() * window.innerHeight,
//   left: Math.random() * window.innerWidth,
//   size: 60 + Math.random() * 100,
//   duration: 8 + Math.random() * 8,
// });

// const Blob = () => {
//   const [spinSpeed, setSpinSpeed] = useState(1);
//   const controls = useAnimation();
//   const moveControls = useAnimation();
  
//   // Generate random edge/corner starting position and final position
//   const [initialProps] = useState(() => {
//     const size = 60 + Math.random() * 100;
//     const duration = 8 + Math.random() * 8;
    
//     // Random edge/corner positions
//     const edges = [
//       { top: -100, left: Math.random() * window.innerWidth }, // Top edge
//       { top: window.innerHeight + 100, left: Math.random() * window.innerWidth }, // Bottom edge
//       { top: Math.random() * window.innerHeight, left: -100 }, // Left edge
//       { top: Math.random() * window.innerHeight, left: window.innerWidth + 100 }, // Right edge
//       { top: -100, left: -100 }, // Top-left corner
//       { top: -100, left: window.innerWidth + 100 }, // Top-right corner
//       { top: window.innerHeight + 100, left: -100 }, // Bottom-left corner
//       { top: window.innerHeight + 100, left: window.innerWidth + 100 }, // Bottom-right corner
//     ];
    
//     const randomEdge = edges[Math.floor(Math.random() * edges.length)];
    
//     return {
//       startTop: randomEdge.top,
//       startLeft: randomEdge.left,
//       finalTop: Math.random() * window.innerHeight,
//       finalLeft: Math.random() * window.innerWidth,
//       size,
//       duration,
//     };
//   });
  
//   const { startTop, startLeft, finalTop, finalLeft, size, duration } = initialProps;
//   const positionRef = useRef({ top: finalTop, left: finalLeft });

//   const handleClick = () => {
//     setSpinSpeed(3);
//     setTimeout(() => {
//       setSpinSpeed(1);
//     }, 1000);
//   };

//   // Fix glitch by immediately positioning at edge and animate in
//   useEffect(() => {
//     // Immediately set starting position (off-screen) and invisible
//     moveControls.set({
//       top: startTop,
//       left: startLeft,
//       opacity: 0,
//     });

//     // Wait for text fade-in, then slide in from edge
//     const slideInTimeout = setTimeout(() => {
//       moveControls.start({
//         top: finalTop,
//         left: finalLeft,
//         opacity: 1,
//         transition: {
//           duration: 2,
//           ease: "easeOut",
//         },
//       });
//     }, 4000); // 4 second delay - adjust for your text timing

//     return () => clearTimeout(slideInTimeout);
//   }, [startTop, startLeft, finalTop, finalLeft, moveControls]);

//   // Spin logic (unchanged)
//   useEffect(() => {
//     controls.start({
//       rotate: [0, 360],
//       transition: {
//         repeat: Infinity,
//         ease: "linear",
//         duration: duration / spinSpeed,
//       },
//     });
//   }, [spinSpeed, duration, controls]);

//   // Movement logic - start after slide-in is complete
//   useEffect(() => {
//     const moveBlob = () => {
//       const newTop = Math.random() * window.innerHeight;
//       const newLeft = Math.random() * window.innerWidth;
//       moveControls.start({
//         top: newTop,
//         left: newLeft,
//         opacity: 1,
//         transition: {
//           duration: duration,
//           ease: "easeInOut",
//         },
//       });
//       positionRef.current = { top: newTop, left: newLeft };
//     };

//     // Wait for text (4s) + slide-in (2s) + extra delay (2s) = 8s
//     const firstMoveTimeout = setTimeout(() => {
//       moveBlob();
//       const interval = setInterval(moveBlob, duration * 1000);
//     }, 8000);

//     return () => clearTimeout(firstMoveTimeout);
//   }, [duration, moveControls]);

//   return (
//     <motion.div // before the className was absolute border-2 border-gray-400 rounded-full border-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.3)]
//       className="absolute border-2 border-gray-400 rounded-full border-gray-900 rounded-full"
//       animate={moveControls}
//       onClick={handleClick}
//       initial={{ opacity: 0 }}
//       style={{
//         width: size,
//         height: size,
//       }}
//     >
//       <motion.div
//         className="w-full h-full relative"
//         animate={controls}
//         style={{ borderRadius: "50%" }}
//       >
//         {/* Limbs */}
//         <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-400 rounded-full" />
//         <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-400 rounded-full" />
//         <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-3 h-3 bg-gray-400 rounded-full" />
//         <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-3 h-3 bg-gray-400 rounded-full" />
//       </motion.div>
//     </motion.div>
//   );
// };

// const BlobBackground = () => {
//   const blobCount = 6;

//   return (
//     <div className="fixed inset-0 overflow-hidden" style={{zIndex: 1}}>
//       {Array.from({ length: blobCount }).map((_, idx) => (
//         <Blob key={idx} />
//       ))}
//     </div>
//   );
// };

// export default BlobBackground;

// import { useEffect, useRef, useState } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { Laptop, Headphones, Gamepad2, Coffee, Code, Database, Merge, Bug, Bot, Code2, GraduationCap } from 'lucide-react';
// // import { Horse, Heart, Cube } from "@phosphor-icons/react";

// // Define different floating objects
// const objectTypes = [
//   { icon: Laptop, name: 'laptop' },
//   { icon: Headphones, name: 'headphones' },
//   { icon: Gamepad2, name: 'gamepad' },
//   // { icon: Cube, name: 'cube' },
//   { icon: Coffee, name: 'coffee' },
//   { icon: Code, name: 'code' },
//   { icon: Database, name: 'database' },
//   { icon: Merge, name: 'merge' },
//   { icon: Bug, name: 'bug' },
//   { icon: Bot, name: 'Bot' },
//   { icon: Code2, name: 'Code2' },
//   { icon: GraduationCap, name: 'graduationCap'}
// ];

// const FloatingObject = () => {
//   const [spinSpeed, setSpinSpeed] = useState(1);
//   const controls = useAnimation();
//   const moveControls = useAnimation();
  
//   // Generate random edge/corner starting position and object type
//   const [initialProps] = useState(() => {
//     const size = 40 + Math.random() * 60; // Smaller size for icons
//     const duration = 8 + Math.random() * 8;
//     const objectType = objectTypes[Math.floor(Math.random() * objectTypes.length)];
    
//     // Random edge/corner positions
//     const edges = [
//       { top: -100, left: Math.random() * window.innerWidth }, // Top edge
//       { top: window.innerHeight + 100, left: Math.random() * window.innerWidth }, // Bottom edge
//       { top: Math.random() * window.innerHeight, left: -100 }, // Left edge
//       { top: Math.random() * window.innerHeight, left: window.innerWidth + 100 }, // Right edge
//       { top: -100, left: -100 }, // Top-left corner
//       { top: -100, left: window.innerWidth + 100 }, // Top-right corner
//       { top: window.innerHeight + 100, left: -100 }, // Bottom-left corner
//       { top: window.innerHeight + 100, left: window.innerWidth + 100 }, // Bottom-right corner
//     ];
    
//     const randomEdge = edges[Math.floor(Math.random() * edges.length)];
    
//     return {
//       startTop: randomEdge.top,
//       startLeft: randomEdge.left,
//       finalTop: Math.random() * window.innerHeight,
//       finalLeft: Math.random() * window.innerWidth,
//       size,
//       duration,
//       objectType,
//     };
//   });
  
//   const { startTop, startLeft, finalTop, finalLeft, size, duration, objectType } = initialProps;
//   const positionRef = useRef({ top: finalTop, left: finalLeft });

//   const handleClick = () => {
//     setSpinSpeed(3);
//     setTimeout(() => {
//       setSpinSpeed(1);
//     }, 1000);
//   };

//   // Position and animate in
//   useEffect(() => {
//     moveControls.set({
//       top: startTop,
//       left: startLeft,
//       opacity: 0,
//     });

//     const slideInTimeout = setTimeout(() => {
//       moveControls.start({
//         top: finalTop,
//         left: finalLeft,
//         opacity: 1,
//         transition: {
//           duration: 2,
//           ease: "easeOut",
//         },
//       });
//     }, 4000);

//     return () => clearTimeout(slideInTimeout);
//   }, [startTop, startLeft, finalTop, finalLeft, moveControls]);

//   // Gentle rotation animation
//   useEffect(() => {
//     controls.start({
//       rotate: [0, 360],
//       transition: {
//         repeat: Infinity,
//         ease: "linear",
//         duration: duration / spinSpeed,
//       },
//     });
//   }, [spinSpeed, duration, controls]);

//   // Movement logic
//   useEffect(() => {
//     const moveObject = () => {
//       const newTop = Math.random() * window.innerHeight;
//       const newLeft = Math.random() * window.innerWidth;
//       moveControls.start({
//         top: newTop,
//         left: newLeft,
//         opacity: 1,
//         transition: {
//           duration: duration,
//           ease: "easeInOut",
//         },
//       });
//       positionRef.current = { top: newTop, left: newLeft };
//     };

//     const firstMoveTimeout = setTimeout(() => {
//       moveObject();
//       const interval = setInterval(moveObject, duration * 1000);
//       return () => clearInterval(interval);
//     }, 3000);

//     return () => clearTimeout(firstMoveTimeout);
//   }, [duration, moveControls]);

//   const IconComponent = objectType.icon;

//   return (
//     <motion.div
//       className="absolute text-gray-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
//       animate={moveControls}
//       onClick={handleClick}
//       initial={{ opacity: 0 }}
//       style={{
//         width: size,
//         height: size,
//       }}
//     >
//       <motion.div
//         className="w-full h-full flex items-center justify-center"
//         animate={controls}
//       >
//         <IconComponent 
//           size={size * 0.8} 
//           strokeWidth={1.5}
//           className="drop-shadow-lg"
//         />
//       </motion.div>
//     </motion.div>
//   );
// };

// const BlobBackground = () => {
//   const objectCount = 6;
//   return (
//     <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{zIndex: 1}}>
//       {Array.from({ length: objectCount }).map((_, idx) => (
//         <FloatingObject key={idx} />
//       ))}
//     </div>
//   );
// };

// export default BlobBackground;

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Brain, Laptop, Headphones, Gamepad2, Coffee, Code, Database, Bug, Bot, Code2, GraduationCap, GitCompare, Microscope } from 'lucide-react';
// import { Horse, Heart, Cube } from "@phosphor-icons/react";

// Define different floating objects
const objectTypes = [
  { icon: Laptop, name: 'laptop' },
  { icon: Headphones, name: 'headphones' },
  { icon: Gamepad2, name: 'gamepad' },
  { icon: Microscope, name: 'microscope' },
  { icon: Coffee, name: 'coffee' },
  { icon: Brain, name: 'brain' },
  { icon: Database, name: 'database' },
  { icon: GitCompare, name: 'gitCompare' },
  { icon: Bug, name: 'bug' },
  { icon: Bot, name: 'Bot' },
  { icon: Code2, name: 'Code2' },
  { icon: GraduationCap, name: 'graduationCap'}
];

const FloatingObject = () => {
  const [spinSpeed, setSpinSpeed] = useState(1);
  const controls = useAnimation();
  const moveControls = useAnimation();
  
  const [initialProps] = useState(() => {
    const size = 40 + Math.random() * 60;
    const duration = 8 + Math.random() * 8;
    const objectType = objectTypes[Math.floor(Math.random() * objectTypes.length)];
    
    // Get document dimensions
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
    const documentWidth = Math.max(
      document.body.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.clientWidth,
      document.documentElement.scrollWidth,
      document.documentElement.offsetWidth
    );
    
    // Random edge/corner positions based on DOCUMENT size
    const edges = [
      { top: -100, left: Math.random() * documentWidth }, // Top edge
      { top: documentHeight + 100, left: Math.random() * documentWidth }, // Bottom edge
      { top: Math.random() * documentHeight, left: -100 }, // Left edge
      { top: Math.random() * documentHeight, left: documentWidth + 100 }, // Right edge
      { top: -100, left: -100 }, // Top-left corner
      { top: -100, left: documentWidth + 100 }, // Top-right corner
      { top: documentHeight + 100, left: -100 }, // Bottom-left corner
      { top: documentHeight + 100, left: documentWidth + 100 }, // Bottom-right corner
    ];
    
    const randomEdge = edges[Math.floor(Math.random() * edges.length)];
    
    return {
      startTop: randomEdge.top,
      startLeft: randomEdge.left,
      size,
      duration,
      objectType,
      documentHeight,
      documentWidth,
    };
  });
  
  const { startTop, startLeft, size, duration, objectType, documentHeight, documentWidth } = initialProps;
  const positionRef = useRef({ top: startTop, left: startLeft });

  const handleClick = () => {
    setSpinSpeed(3);
    setTimeout(() => {
      setSpinSpeed(1);
    }, 1000);
  };

  // Start from edge and immediately begin random movement
  useEffect(() => {
    // Set initial position at edge
    moveControls.set({
      top: startTop,
      left: startLeft,
      opacity: 0,
    });

    // Fade in and start moving immediately
    const slideInTimeout = setTimeout(() => {
      // Fade in
      moveControls.start({
        opacity: 1,
        transition: {
          duration: 1,
          ease: "easeOut",
        },
      });

      // Start random movement immediately
      setTimeout(() => {
        startRandomMovement();
      }, 500);
    }, 500);

    return () => clearTimeout(slideInTimeout);
  }, []);

  // Random movement function
  const startRandomMovement = () => {
    const moveObject = () => {
      const newTop = Math.random() * documentHeight; // Use full document height
      const newLeft = Math.random() * documentWidth; // Use full document width
      
      moveControls.start({
        top: newTop,
        left: newLeft,
        opacity: 1,
        transition: {
          duration: duration,
          ease: "easeInOut",
        },
      });
      positionRef.current = { top: newTop, left: newLeft };
    };

    // Start first random movement
    moveObject();
    
    // Continue random movement at intervals
    const interval = setInterval(moveObject, duration * 1000);
    
    // Store interval ref for cleanup (optional)
    return () => clearInterval(interval);
  };

  // Gentle rotation
  useEffect(() => {
    controls.start({
      rotate: [0, 360],
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: duration / spinSpeed,
      },
    });
  }, [spinSpeed, duration, controls]);

  const IconComponent = objectType.icon;

  return (
    <motion.div
      className="absolute text-gray-500 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
      animate={moveControls}
      onClick={handleClick}
      initial={{ opacity: 0 }}
      style={{
        width: size,
        height: size,
      }}
    >
      <motion.div
        className="w-full h-full flex items-center justify-center"
        animate={controls}
      >
        <IconComponent 
          size={size * 0.8} 
          strokeWidth={1.5}
          className="drop-shadow-lg"
        />
      </motion.div>
    </motion.div>
  );
};

const BlobBackground = () => {
  const objectCount = 8; // Maybe increase count for better coverage
  return (
    <div className="fixed inset-0 overflow-visible pointer-events-none" style={{zIndex: 1}}>
      {Array.from({ length: objectCount }).map((_, idx) => (
        <FloatingObject key={idx} />
      ))}
    </div>
  );
};

export default BlobBackground;
