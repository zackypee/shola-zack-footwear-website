import React from 'react'
import { useAuth } from '../context/AuthContext'
import Footer from '../components/Footer'

const Admin = () => {
  const { users, currentUser } = useAuth()

  if (!currentUser) {
    return (
      <div className="mt-20 container mx-auto px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
        <p>Please log in to view this page.</p>
      </div>
    )
  }

  return (
    <section className='mt-20 container mx-auto px-4'>
      <h1 className='text-3xl font-bold mb-6'>User Database (LocalStorage)</h1>
      
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Current User</h2>
        <p><strong>Name:</strong> {currentUser.name}</p>
        <p><strong>Email:</strong> {currentUser.email}</p>
        <p><strong>ID:</strong> {currentUser.id}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">All Registered Users ({users.length})</h2>
        <div className="space-y-3">
          {users.map((user) => (
            <div key={user.id} className={`p-4 border rounded-lg ${user.id === currentUser.id ? 'bg-green-50 border-green-200' : 'bg-gray-50'}`}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{user.name}</h3>
                  <p className="text-gray-600">{user.email}</p>
                  <p className="text-sm text-gray-500">ID: {user.id}</p>
                </div>
                {user.id === currentUser.id && (
                  <span className="px-2 py-1 bg-green-200 text-green-800 text-xs rounded">You</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6 p-4 bg-yellow-50 rounded-lg">
        <h3 className="font-semibold mb-2">Storage Info</h3>
        <p className="text-sm text-gray-600">
          Users are stored in localStorage under the key 'users_v1'. 
          Current user is stored under 'current_user_v1'.
        </p>
      </div>

      <Footer />
    </section>
  )
}

export default Admin
