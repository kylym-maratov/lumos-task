import React from "react";

export const createPoints = (currentSlide: string, sliders: string[]) => {
  if (sliders.length > 1) {
    return sliders.map((item: string, key: number) => <div key={key} id={item === currentSlide ? "active" : ""}></div>)
  }
}
export const getCurrentDate = (item: any) => {
  if (!item.createdAt) return null
  const date = item.createdAt.split(' ')

  return `${date[1]} ${date[2]}.${date[3]} | ${date[4]}`
}