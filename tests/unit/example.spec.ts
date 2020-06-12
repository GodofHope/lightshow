import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/Footer.vue";

describe("Footer.vue", () => {
  it("has author", () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.text()).to.include("Mr.Hope");
  });
});
