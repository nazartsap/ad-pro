import fb from 'firebase'
class Order {
	constructor(name, phone, adId, done = false, id = null) {
		this.name = name
		this.phone = phone
		this.adId = adId
		this.done = done
		this.id = id	
	}
}
export default {
    state: {
        orders:[]
    },
	mutations: {
        loadOrders (state, payload) {
            state.orders = payload
        }
    },
	actions: {
        async createOrder({commit},{name, phone, adId, ownerId}) {
			const order = new Order(name,phone,adId)
			commit('clearError')
			try {
				await fb.database().ref(`/users/${ownerId}/orders`).push(order)

			} catch (error){
				commit('setError', error.message)
				throw error
			}
		},
        async fetchOrders ({commit, getters}) {
            commit('setLoaging', true)
            commit('clearError') 
            const resultOrders = []
            try {
                const fbVal = await fb.database().ref(`/users/${getters.user.id}/orders`).once('value')
                const orders = fbVal.val()
                if (orders !== null) {
                    Object.keys(orders).forEach(key => {
                        const order = orders[key]
                        resultOrders.push(
                        new Order(
                        order.name,
                        order.phone,
                        order.adId,
                        order.done,
                        key
                        )
                    )
                })
            }
            commit('loadOrders', resultOrders)
            commit('setLoaging', false)
            } catch(error) {
                commit('setError', error.message)
                commit('setLoaging',false)
                throw error
            }
        },
        getters: {
            doneOrders (state) {
                return state.orders.filter(order => order.done)
                },
            undoneOrders(state) {
                return state.orders.filter(order => !order.done)
                },
            orders (state, getters) {	return getters.undoneOrders.concat(getters.doneOrders)
                }
        }
        
    }
}