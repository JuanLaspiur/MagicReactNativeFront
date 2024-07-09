import api from './configure';

// Route.get("tabloide", "TabloideController.tabloideAll");

const getAllTabloides =  async() => {
    try {
      const response = await api.get('/tabloide')
      return response.data
    } catch (error) {
      console.log('Error al crear usuario '+error)
    }
  }
  

  export { getAllTabloides }