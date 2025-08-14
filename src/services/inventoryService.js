import { API_BASE_URL, handleResponse } from "./api.js";

export const inventoryService = {
    

    getAll: async () => {
    try {
        const token = localStorage.getItem('authToken'); // ← toma el JWT
        const response = await fetch(`${API_BASE_URL}/inventory`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // ← agrega esto
            }
        });

        return await handleResponse(response);
    } catch (error) {
        console.error('Error al obtener el Inventario:', error);
        throw error;
    }
},


    getById: async (id) => {
        try {
            const response = await fetch(`${API_BASE_URL}/inventory/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            return await handleResponse(response);
        } catch (error) {
            console.error('Error al obtener el Inventario:', error);
            throw error;
        }
    },

    create: async (inventory) => {
        try {
            const token = localStorage.getItem('authToken');
            const response = await fetch(`${API_BASE_URL}/inventory`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    id_book: inventory.id_book,
                    name: inventory.name,
                    description: inventory.description,
                    cost: parseFloat(inventory.cost),
                    discount: parseInt(inventory.discount) || 0,
                    active: inventory.active ?? true
                })
            });

            return await handleResponse(response);
        } catch (error) {
            console.error('Error al crear el Inventario:', error);
            throw error;
        }
    },

    update: async (id, inventory) => {
        try {
            const token = localStorage.getItem('authToken');
            const response = await fetch(`${API_BASE_URL}/inventory/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    id_book: inventory.id_book,
                    name: inventory.name,
                    description: inventory.description,
                    cost: parseFloat(inventory.cost),
                    discount: parseInt(inventory.discount) || 0,
                    active: inventory.active
                })
            });

            return await handleResponse(response);
        } catch (error) {
            console.error('Error al actualizar Inventario:', error);
            throw error;
        }
    },

    deactivate: async (id) => {
        try {
            const token = localStorage.getItem('authToken');
            const response = await fetch(`${API_BASE_URL}/inventory/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            return await handleResponse(response);
        } catch (error) {
            console.error('Error al desactivar Inventario:', error);
            throw error;
        }
    }
};