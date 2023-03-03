import { mount } from "@vue/test-utils";
import  FormularioContacto  from "@/components/FormularioContacto.vue";
test("montar", () => {
  const wrapper = mount(<FormularioContacto />);
  expect(wrapper.find('.h2').text()).toBe("Contacta con nosotros")
  expect(wrapper.find('.h2').text()).not.toBe("Texto aleatorio")
});
