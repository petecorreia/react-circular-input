import { MouseEvent, TouchEvent } from "react";

export const DEG_360_IN_RAD = radians(360);
export const ANGLE_OFFSET = Math.PI;

export type Coordinates = {
  x: number;
  y: number;
};

export function polarToCartesian({
  center,
  angle,
  radius
}: {
  center: Coordinates;
  angle: number;
  radius: number;
}): Coordinates {
  return {
    x: center.x + Math.sin(angle) * radius,
    y: center.y + Math.cos(angle) * radius
  };
}

export function radians(degrees: number) {
  return (degrees * Math.PI) / 180;
}

export function degrees(radians: number) {
  return (radians * 180) / Math.PI;
}

export function matrixScale(scale: number, x: number, y: number) {
  return `matrix(${scale}, 0, 0, ${scale}, ${x - scale * x}, ${y - scale * y})`;
}

export function clamp(min: number, max: number, value: number) {
  return Math.min(Math.max(value, min), max);
}

export function calculateNearestValueToPoint({
  center: { x: centerX, y: centerY },
  container: { x: containerX, y: containerY },
  point: { x: pointX, y: pointY },
  radius,
  value
}: {
  center: Coordinates;
  container: Coordinates;
  point: Coordinates;
  radius: number;
  value: number;
}) {
  const radialPosition = {
    x: pointX - containerX - centerX,
    y: -(pointY - containerY - centerY)
  };
  const valuePosition = polarToCartesian({
    center: { x: 0, y: 0 },
    angle: valueToAngle(value),
    radius
  });
  const deltaTheta = calcAngleDiff(
    radialPosition.x,
    radialPosition.y,
    valuePosition.x,
    -valuePosition.y
  );
  const deltaValue = value + deltaTheta / 360;
  const nearestValue = deltaValue > 1 ? deltaValue - 1 : deltaValue;
  return nearestValue;
}

export function absTouchPos(e: TouchEvent) {
  return {
    x: e.touches[0].pageX - (window.scrollX || window.pageXOffset),
    y: e.touches[0].pageY - (window.scrollY || window.pageYOffset)
  };
}

export function absMousePos(e: MouseEvent) {
  return {
    x: e.pageX - (window.scrollX || window.pageXOffset),
    y: e.pageY - (window.scrollY || window.pageYOffset)
  };
}

export function stopEvent(e: Event | MouseEvent | TouchEvent) {
  e.stopPropagation();
  e.preventDefault();
}

export function calcAngleDiff(x1: number, y1: number, x2: number, y2: number) {
  let arcTangent = Math.atan2(x1 * y2 - y1 * x2, x1 * x2 + y1 * y2);
  if (arcTangent < 0) {
    arcTangent += 2 * Math.PI;
  }
  return (arcTangent * 180) / Math.PI;
}

export function valueToAngle(value: number) {
  return -value * DEG_360_IN_RAD + ANGLE_OFFSET;
}
