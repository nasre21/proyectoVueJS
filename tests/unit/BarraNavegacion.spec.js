import { mount } from "@vue/test-utils";
import BarraNavegacion from "@/components/BarraNavegacion.vue";


describe('BarraNavegacion', () => {
  it('tiene un logo', () => {
    const wrapper = mount(<BarraNavegacion />);
    const logo = wrapper.find('.logo');

    expect(logo.exists()).toBeTruthy();
  });

  it('tiene tres cuadros de texto', () => {
    const wrapper = mount(<BarraNavegacion />);
    const cuadrosDeTexto = wrapper.findAll('.opcion');

    expect(cuadrosDeTexto).toHaveLength(3);
  });
});