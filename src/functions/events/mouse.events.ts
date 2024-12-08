import React from "react";

// function for when user will mouse move on the resizer to resize the code editor
export const handleResizeMouseMove = (
  e: MouseEvent,
  codeEditorContainerRef: React.RefObject<HTMLDivElement>
) => {
  if (codeEditorContainerRef.current) {
    const { top, left } = codeEditorContainerRef.current.getBoundingClientRect();

    if (window.innerWidth < 425) {
      console.log("is mobile");
      const newHeight = e.clientY - top - 2;
      codeEditorContainerRef.current.style.height = `${newHeight}px`;
      codeEditorContainerRef.current.style.width = `100%`; // Full width on mobile
    } 
    else {
      const newWidth = e.clientX - left - 2;
      codeEditorContainerRef.current.style.width = `${newWidth}px`;
      codeEditorContainerRef.current.style.height = `100%`; // Full height on desktop
    }
  }
};

// function for stoping the resize when user will mouse up
export const handleResizeStop = (
  mouseMoveListener: (event: MouseEvent) => void,
  mouseUpListener: () => void
) => {
  document.removeEventListener("mousemove", mouseMoveListener);
  document.removeEventListener("mouseup", mouseUpListener);

  const iframe = document.querySelector("iframe");
  if (iframe) {
    iframe.style.pointerEvents = "auto"; // Re-enable pointer events
  }
};


// function to handle resize when user will mouse down on the resizer
export const handleResize = (
  e: MouseEvent,
  codeEditorContainerRef: React.RefObject<HTMLDivElement>
) => {
  e.preventDefault();

  const mouseMoveListener = (event: MouseEvent) => {
    handleResizeMouseMove(event, codeEditorContainerRef);
  }

  const mouseUpListener = () => {
    handleResizeStop(mouseMoveListener, mouseUpListener);
  }

  document.addEventListener("mousemove", mouseMoveListener);
  document.addEventListener("mouseup", mouseUpListener);

  const iframe = document.querySelector("iframe");
  if (iframe) {
    iframe.style.pointerEvents = "none"; // Temporarily disable pointer events
  }
};
