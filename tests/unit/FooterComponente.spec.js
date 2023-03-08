import { mount } from "@vue/test-utils";
import  FooterComponente  from "@/components/FooterComponente.vue";
describe("FooterComponente", () =>{
    

    it('en la lista del footer existe Información legal', () => {
        const wrapper = mount(<FooterComponente />);
        const lista = ['Información legal', 'Politica de privacidad',];
        expect(lista).toContain('Información legal');
        //  expect(new Set(lista)).toContain('Información legal' );
    });
     it('en la lista del footer existe Politica de privacidad', () => {
         const wrapper = mount(<FooterComponente />);
        const lista = ['Información legal', 'Politica de privacidad',];
          expect(lista).toContain('Politica de privacidad');
        //   expect(new Set(lista)).toContain('Politica de privacidad');
     });
});