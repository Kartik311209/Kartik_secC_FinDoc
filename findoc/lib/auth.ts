"use server"

import { cookies } from "next/headers"

// Initial mock user database
const initialUsers = [
  {
    id: 1,
    username: "admin",
    password: "admin123",
    role: "admin",
    fullName: "Admin User",
    email: "admin@findoc.example",
    mobile: "9876543210",
  },
  {
    id: 2,
    username: "employee",
    password: "employee123",
    role: "employee",
    fullName: "Employee User",
    email: "employee@findoc.example",
    mobile: "9876543211",
  },
  {
    id: 3,
    username: "customer",
    password: "customer123",
    role: "customer",
    fullName: "Customer User",
    email: "customer@findoc.example",
    mobile: "9876543212",
  },
  {
    id: 4,
    username: "john.doe",
    password: "john123",
    role: "customer",
    fullName: "John Doe",
    email: "john.doe@example.com",
    mobile: "9876543213",
  },
  {
    id: 5,
    username: "jane.smith",
    password: "jane123",
    role: "customer",
    fullName: "Jane Smith",
    email: "jane.smith@example.com",
    mobile: "9876543214",
  },
  {
    id: 6,
    username: "bob.johnson",
    password: "bob123",
    role: "customer",
    fullName: "Bob Johnson",
    email: "bob.johnson@example.com",
    mobile: "9876543215",
  },
  {
    id: 7,
    username: "alice.brown",
    password: "alice123",
    role: "customer",
    fullName: "Alice Brown",
    email: "alice.brown@example.com",
    mobile: "9876543216",
  },
  {
    id: 8,
    username: "charlie.wilson",
    password: "charlie123",
    role: "customer",
    fullName: "Charlie Wilson",
    email: "charlie.wilson@example.com",
    mobile: "9876543217",
  },
  {
    id: 9,
    username: "emma.davis",
    password: "emma123",
    role: "customer",
    fullName: "Emma Davis",
    email: "emma.davis@example.com",
    mobile: "9876543218",
  },
  {
    id: 10,
    username: "michael.rodriguez",
    password: "michael123",
    role: "customer",
    fullName: "Michael Rodriguez",
    email: "michael.rodriguez@example.com",
    mobile: "9876543219",
  },
  {
    id: 11,
    username: "sophia.lee",
    password: "sophia123",
    role: "customer",
    fullName: "Sophia Lee",
    email: "sophia.lee@example.com",
    mobile: "9876543220",
  },
  {
    id: 12,
    username: "william.taylor",
    password: "william123",
    role: "customer",
    fullName: "William Taylor",
    email: "william.taylor@example.com",
    mobile: "9876543221",
  },
  {
    id: 13,
    username: "olivia.martinez",
    password: "olivia123",
    role: "customer",
    fullName: "Olivia Martinez",
    email: "olivia.martinez@example.com",
    mobile: "9876543222",
  },
  {
    id: 14,
    username: "james.anderson",
    password: "james123",
    role: "customer",
    fullName: "James Anderson",
    email: "james.anderson@example.com",
    mobile: "9876543223",
  },
  {
    id: 15,
    username: "manager",
    password: "manager123",
    role: "admin",
    fullName: "Manager User",
    email: "manager@findoc.example",
    mobile: "9876543224",
  },
  {
    id: 16,
    username: "supervisor",
    password: "super123",
    role: "employee",
    fullName: "Supervisor User",
    email: "supervisor@findoc.example",
    mobile: "9876543225",
  },
  {
    id: 17,
    username: "teller",
    password: "teller123",
    role: "employee",
    fullName: "Teller User",
    email: "teller@findoc.example",
    mobile: "9876543226",
  },
]

// Use cookies to store registered users
function getRegisteredUsers() {
  try {
    const registeredUsersCookie = cookies().get("registered_users")
    if (registeredUsersCookie) {
      return JSON.parse(registeredUsersCookie.value)
    }
  } catch (error) {
    console.error("Error parsing registered users:", error)
  }
  return []
}

// Get all users (initial + registered)
function getAllUsers() {
  const registeredUsers = getRegisteredUsers()
  return [...initialUsers, ...registeredUsers]
}

// Save a new registered user
function saveRegisteredUser(user: any) {
  try {
    const registeredUsers = getRegisteredUsers()
    registeredUsers.push(user)

    // Store in cookie with 30-day expiration
    cookies().set({
      name: "registered_users",
      value: JSON.stringify(registeredUsers),
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 30 * 24 * 60 * 60, // 30 days
    })

    return true
  } catch (error) {
    console.error("Error saving registered user:", error)
    return false
  }
}

interface LoginCredentials {
  username: string
  password: string
  role?: string
}

interface RegisterData {
  username: string
  password: string
  fullName: string
  email: string
  mobile: string
}

export async function login({ username, password, role }: LoginCredentials): Promise<boolean> {
  const allUsers = getAllUsers()

  // Find user by username and password
  const user = allUsers.find((u) => u.username === username && u.password === password)

  if (user) {
    // If role is provided, check if it matches
    if (role && user.role !== role) {
      console.log(`Role mismatch: Expected ${role}, got ${user.role}`)
      return false
    }

    // Set a secure HTTP-only cookie
    const oneDay = 24 * 60 * 60 * 1000
    cookies().set({
      name: "session",
      value: JSON.stringify({
        id: user.id,
        username: user.username,
        role: user.role,
        fullName: user.fullName,
      }),
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: oneDay,
    })

    console.log(`Login successful for user: ${username}, role: ${user.role}`)
    return true
  }

  console.log(`Login failed for user: ${username}`)
  return false
}

export async function registerUser(data: RegisterData): Promise<boolean> {
  const allUsers = getAllUsers()

  // Check if username already exists
  if (allUsers.some((user) => user.username === data.username)) {
    console.log(`Username already exists: ${data.username}`)
    return false
  }

  // Create new user
  const newUser = {
    id: allUsers.length + 1,
    username: data.username,
    password: data.password,
    role: "customer", // New registrations are always customers
    fullName: data.fullName,
    email: data.email,
    mobile: data.mobile,
  }

  // Save the new user
  const success = saveRegisteredUser(newUser)

  if (success) {
    console.log(`New user registered: ${newUser.username}`)
  }

  return success
}

export async function logout(): Promise<void> {
  cookies().delete("session")
}

export async function getSession() {
  const session = cookies().get("session")

  if (!session) {
    return null
  }

  try {
    return JSON.parse(session.value)
  } catch {
    return null
  }
}

export async function requireAuth(allowedRoles: string[] = []) {
  const session = await getSession()

  if (!session) {
    return null
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(session.role)) {
    return null
  }

  return session
}
