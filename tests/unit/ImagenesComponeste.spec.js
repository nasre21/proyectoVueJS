import { mount } from "@vue/test-utils";
import ImagenesComponente from "@/components/ImagenesComponente.vue";



describe('ImagenesComponente', () => {
    it('montar', () => {
        const wrapper = mount(<ImagenesComponente />);
        expect(wrapper.find('.h3').text()).toBe("Imagenes de prueba para hacer test con jest")
        expect(wrapper.find('.h3').html()).not.toBe("Texto aleatorio")
      });
    })
    describe('ImagenesComponente', () => {
     it('tiene tres imagenes', () => {
     const wrapper = mount(<ImagenesComponente />);
     const imagenes = wrapper.find('.imagenes');
     expect(imagenes.exists()).toBe(false);
     });
    });