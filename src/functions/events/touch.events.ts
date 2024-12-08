import React from "react";

// Function for when the user moves their finger on the resizer to resize the code editor
export const handleTouchResizeMove = (
  e: TouchEvent,
  codeEditorContainerRef: React.RefObject<HTMLDivElement>
) => {
  if (codeEditorContainerRef.current) {
    const { top, left } = codeEditorContainerRef.current.getBoundingClientRect();

    if (window.innerWidth < 425) {
      console.log("is mobile");
      const newHeight = e.touches[0].clientY - top - 2;
      codeEditorContainerRef.current.style.height = `${newHeight}px`;
      codeEditorContainerRef.current.style.width = `100%`; // Full width on mobile
    } 
    else {
      const newWidth = e.touches[0].clientX - left - 2;
      codeEditorContainerRef.current.style.width = `${newWidth}px`;
      codeEditorContainerRef.current.style.height = `100%`; // Full height on desktop
    }
  }
};

// Function for stopping the resize when the user lifts their finger
export const handleTouchResizeStop = (
  touchMoveListener: (event: TouchEvent) => void,
  touchEndListener: () => void
) => {
  document.removeEventListener("touchmove", touchMoveListener);
  document.removeEventListener("touchend", touchEndListener);

  const iframe = document.querySelector("iframe");
  if (iframe) {
    iframe.style.pointerEvents = "auto"; // Re-enable pointer events
  }
};

// Function to handle resize when the user starts touching the resizer
export const handleTouchResize = (
  e: TouchEvent,
  codeEditorContainerRef: React.RefObject<HTMLDivElement>
) => {
  e.preventDefault();

  const touchMoveListener = (event: TouchEvent) => {
    handleTouchResizeMove(event, codeEditorContainerRef);
  };

  const touchEndListener = () => {
    handleTouchResizeStop(touchMoveListener, touchEndListener);
  };

  document.addEventListener("touchmove", touchMoveListener);
  document.addEventListener("touchend", touchEndListener);

  const iframe = document.querySelector("iframe");
  if (iframe) {
    iframe.style.pointerEvents = "none"; // Temporarily disable pointer events
  }
};
