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

export const getUserLike = (likes: any[], userid: string) => {
  let flag = false

  for (let i = 0; likes.length > i; i++) {
     if (likes[i].userid === userid) {
        flag = true
        break
     }
   }
  return flag
}