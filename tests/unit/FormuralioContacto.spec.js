import { mount } from "@vue/test-utils";
import  FormularioContacto  from "@/components/FormularioContacto.vue";
describe("FormularioContact", () =>{
  test("montar", () => {
    const wrapper = mount(<FormularioContacto />);
    expect(wrapper.find('.h2').text()).toBe("Contacta con nosotros")
    expect(wrapper.find('.h2').html()).not.toBe("Texto aleatorio")
  });
})



describe("FormularioContacto", () => {
  test("submit button funciona correctamente", () => {
    const wrapper = mount(<FormularioContacto />);
    wrapper.find("button").trigger("click");
    expect(wrapper.vm.name).toBe("");
    expect(wrapper.vm.surname).toBe("");
    expect(wrapper.vm.city).toBe("");
    expect(wrapper.vm.phone).toBe("");
    expect(wrapper.vm.email).toBe("");
    expect(wrapper.vm.password).toBe("");
  });
  test("los campos del formulario están vacíos al inicio", () => {
    const wrapper = mount(<FormularioContacto />);
    expect(wrapper.vm.name).toBe("");
    expect(wrapper.vm.surname).toBe("");
    expect(wrapper.vm.city).toBe("");
    expect(wrapper.vm.phone).toBe("");
    expect(wrapper.vm.email).toBe("");
    expect(wrapper.vm.password).toBe("");
  });
  
  test("formulario se envia correctamente", () => {
    const wrapper = mount(<FormularioContacto />);
    
    // Mock de window.alert
    const alertMock = jest.fn();
    global.alert = alertMock;
    
    wrapper.setData({
      name: "Jane",
      surname: "Calamity",
      city: "Alburquerque",
      phone: "1234567890",
      email: "jane@example.com",
      password: "password123",
    });
    
    wrapper.find("form").trigger("submit");
    
    expect(wrapper.vm.name).toBe("");
    expect(wrapper.vm.surname).toBe("");
    expect(wrapper.vm.city).toBe("");
    expect(wrapper.vm.phone).toBe("");
    expect(wrapper.vm.email).toBe("");
    expect(wrapper.vm.password).toBe("");
    
    expect(alertMock).toHaveBeenCalledWith("El formulario se ha enviado con éxito");
    
    // Restaurar la función window.alert original después de la prueba
    alertMock.mockRestore();
  });
});
//-------------------------------NUEVOS-----------------------
describe("Actualizacion del input name", () => {
  it("comprobar se actualiza la variable name cuando usuario cambia input name", () => {
    const wrapper = mount(<FormularioContacto />);

    // Simula que el usuario cumplimenta el campo name
    const inputName = wrapper.find("#name");
    inputName.setValue("Jane");

    // Comprueba que la variable se ha actualizado
    expect(wrapper.vm.name).toBe("Jane");
    // expect(wrapper.vm.name).toBe("May");
  });
});
