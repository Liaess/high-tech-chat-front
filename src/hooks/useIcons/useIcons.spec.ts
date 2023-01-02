import { ErrorIcon, useIcons, iconsList } from ".";
import { renderHook } from "@testing-library/react";
import { isValidElement } from "react";

describe("useIcons", () => {
  it("should return the chosen icon", () => {
    const firstIcon = iconsList[0];
    const { result } = renderHook(() => useIcons(firstIcon.name));

    const isValid = isValidElement(result.current);

    expect(isValid).toBeTruthy();
    expect(result.current).toEqual(firstIcon.icon);
  });

  it("should return the default icon", () => {
    const { result } = renderHook(() => useIcons(""));

    expect(result.current).toEqual(ErrorIcon);
  });

  it("should return the chosen icon with chosen className", () => {
    const firstIcon = iconsList[0];
    const { result } = renderHook(() =>
      useIcons(firstIcon.name, "text-light-gray")
    );

    expect(result.current.props.className).toEqual("text-light-gray");
  });
});
