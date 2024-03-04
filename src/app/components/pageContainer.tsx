"use client";

import React, { ReactNode } from "react";

interface PageContainerComponentProps {
  children: ReactNode;
}

const PageContainerComponent: React.FC<PageContainerComponentProps> = ({
  children,
}) => {
  return <div className="flex flex-col min-h-screen">{children}</div>;
};

export default PageContainerComponent;
