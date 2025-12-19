# Admin Login Details & Database Table Guide

Quick reference for admin credentials setup and database table structure.

---

## 🔐 Admin Login Setup

### Step 1: Create Admin User in Supabase

1. **Go to Supabase Dashboard**
   - Visit: https://supabase.com/dashboard
   - Select your HackHub project

2. **Navigate to Authentication**
   - Click **"Authentication"** in left sidebar
   - Click **"Users"** tab

3. **Create New Admin User**
   - Click **"Add user"** → **"Create new user"**
   - Fill in:
     ```
     Email: admin@hackhub.com
     Password: [Choose a strong password]
     ✅ Auto Confirm User: CHECKED (Important!)
     ```
   - Click **"Create user"**

4. **Save Your Credentials**
   ```
   Email: admin@hackhub.com
   Password: [Your chosen password]
   ```

### Step 2: Login to Admin Panel

1. **Start Development Server**
   ```bash
   npm run dev
   ```

2. **Access Login Page**
   ```
   URL: http://localhost:3000/auth/login
   ```

3. **Enter Credentials**
   ```
   Email: admin@hackhub.com
   Password: [Your password]
   ```

4. **Access Admin Dashboard**
   ```
   After login, redirected to: http://localhost:3000/admin
   ```

---

## 📊 Database Table Structure

### Table Name: `hackathons`

### Complete Table Schema

```sql
CREATE TABLE hackathons (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  time TEXT,
  mode TEXT CHECK (mode IN ('Online', 'Offline', 'Hybrid')),
  status TEXT NOT NULL CHECK (status IN ('upcoming', 'ongoing')),
  registration_link TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Column Details

| Column Name | Data Type | Constraints | Description |
|------------|-----------|-------------|-------------|
| `id` | UUID | PRIMARY KEY, DEFAULT uuid_generate_v4() | Unique identifier for each hackathon |
| `name` | TEXT | NOT NULL | Hackathon name (required) |
| `description` | TEXT | NULL allowed | Detailed description of the hackathon |
| `image_url` | TEXT | NULL allowed | URL to hackathon image/banner |
| `start_date` | DATE | NOT NULL | Start date of hackathon (required) |
| `end_date` | DATE | NOT NULL | End date of hackathon (required) |
| `time` | TEXT | NULL allowed | Time details (e.g., "9:00 AM - 6:00 PM") |
| `mode` | TEXT | CHECK constraint | Must be: 'Online', 'Offline', or 'Hybrid' |
| `status` | TEXT | NOT NULL, CHECK constraint | Must be: 'upcoming' or 'ongoing' |
| `registration_link` | TEXT | NULL allowed | URL for registration |
| `created_at` | TIMESTAMP | DEFAULT NOW() | Auto-generated timestamp |

---

## 📝 Sample Admin Credentials (Examples)

### Example 1: Default Admin
```
Email: admin@hackhub.com
Password: Admin@123456
```

### Example 2: Test Admin
```
Email: test@hackhub.com
Password: Test@123456
```

### Example 3: Production Admin
```
Email: admin@yourdomain.com
Password: [Strong password with 12+ characters]
```

**⚠️ Important**: Use strong passwords in production!

---

## 🔍 Viewing Table Data

### Via Supabase Dashboard

1. Go to **"Table Editor"** in Supabase dashboard
2. Click on **"hackathons"** table
3. View all rows and columns
4. Can edit directly in dashboard (if needed)

### Via SQL Query

```sql
-- View all hackathons
SELECT * FROM hackathons ORDER BY created_at DESC;

-- View only upcoming hackathons
SELECT * FROM hackathons WHERE status = 'upcoming';

-- View only ongoing hackathons
SELECT * FROM hackathons WHERE status = 'ongoing';

-- View specific columns
SELECT id, name, start_date, end_date, status 
FROM hackathons 
ORDER BY start_date;
```

---

## 📋 Sample Data Entry (Admin Form)

When admin fills the form, data maps to table columns:

| Form Field | Database Column | Example Value |
|------------|----------------|---------------|
| Name * | `name` | "Tech Innovation Challenge 2024" |
| Description | `description` | "Join us for a 48-hour hackathon..." |
| Image URL | `image_url` | "https://images.unsplash.com/..." |
| Start Date * | `start_date` | "2024-12-15" |
| End Date * | `end_date` | "2024-12-17" |
| Time | `time` | "9:00 AM - 6:00 PM" |
| Mode | `mode` | "Hybrid" |
| Registration Link | `registration_link` | "https://example.com/register" |
| Status | `status` | "upcoming" (auto-set based on page) |

**Note**: Fields marked with * are required.

---

## 🗄️ Database Indexes

For better query performance, these indexes are created:

```sql
CREATE INDEX idx_hackathons_status ON hackathons(status);
CREATE INDEX idx_hackathons_start_date ON hackathons(start_date);
CREATE INDEX idx_hackathons_created_at ON hackathons(created_at);
```

**Benefits**:
- Faster filtering by status
- Faster date-based sorting
- Better performance on large datasets

---

## 🔐 Row Level Security (RLS) Policies

### Policy Summary

| Policy Name | Operation | Who Can Access | Purpose |
|-------------|-----------|----------------|---------|
| Public read access | SELECT | Everyone (public) | Users can view hackathons |
| Admin insert access | INSERT | Authenticated users only | Admins can add hackathons |
| Admin update access | UPDATE | Authenticated users only | Admins can edit hackathons |
| Admin delete access | DELETE | Authenticated users only | Admins can delete hackathons |

### Policy Details

```sql
-- Public can read
CREATE POLICY "Public read access" 
ON hackathons FOR SELECT 
USING (true);

-- Only authenticated admins can insert
CREATE POLICY "Admin insert access" 
ON hackathons FOR INSERT 
TO authenticated WITH CHECK (true);

-- Only authenticated admins can update
CREATE POLICY "Admin update access" 
ON hackathons FOR UPDATE 
TO authenticated USING (true) WITH CHECK (true);

-- Only authenticated admins can delete
CREATE POLICY "Admin delete access" 
ON hackathons FOR DELETE 
TO authenticated USING (true);
```

---

## 📊 Sample Data Insertion

### Via Admin Form (Recommended)

1. Login as admin
2. Go to `/admin/upcoming` or `/admin/ongoing`
3. Click "+ Add Hackathon"
4. Fill form and submit
5. Data automatically inserted into table

### Via SQL (Alternative)

```sql
INSERT INTO hackathons (
  name,
  description,
  image_url,
  start_date,
  end_date,
  time,
  mode,
  status,
  registration_link
) VALUES (
  'Tech Innovation Challenge 2024',
  'Join us for a 48-hour hackathon focused on innovative tech solutions.',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800',
  '2024-12-15',
  '2024-12-17',
  '9:00 AM - 6:00 PM',
  'Hybrid',
  'upcoming',
  'https://example.com/register'
);
```

---

## 🔍 Verifying Admin Access

### Check 1: User Exists
```sql
-- Run in Supabase SQL Editor
SELECT email, created_at, email_confirmed_at 
FROM auth.users 
WHERE email = 'admin@hackhub.com';
```

### Check 2: User is Confirmed
- Go to Authentication → Users
- Find your admin user
- Check "Email Confirmed" column
- Should show ✅ (confirmed)

### Check 3: Can Login
1. Go to `/auth/login`
2. Enter credentials
3. Should redirect to `/admin`
4. Should see admin sidebar

### Check 4: Can Insert Data
1. Login as admin
2. Go to `/admin/upcoming`
3. Click "+ Add Hackathon"
4. Fill form and submit
5. Should see success and hackathon appears

---

## 🛠️ Managing Multiple Admin Users

### Create Additional Admins

1. Go to Supabase Dashboard → Authentication → Users
2. Click "Add user"
3. Enter new email and password
4. Enable "Auto Confirm User"
5. Save credentials

### List All Admin Users

```sql
-- View all authenticated users
SELECT 
  id,
  email,
  created_at,
  email_confirmed_at,
  last_sign_in_at
FROM auth.users
ORDER BY created_at DESC;
```

### Delete Admin User

1. Go to Authentication → Users
2. Find the user
3. Click "..." menu → "Delete user"
4. Confirm deletion

**⚠️ Warning**: Deleting user will remove their access but won't delete hackathons they created.

---

## 🔄 Admin Operations Summary

### CREATE (Insert)
- **Where**: `/admin/upcoming` or `/admin/ongoing`
- **Action**: Click "+ Add Hackathon" → Fill form → Submit
- **SQL**: `INSERT INTO hackathons (...) VALUES (...)`

### READ (Select)
- **Where**: Admin dashboard or user pages
- **Action**: Automatically displayed
- **SQL**: `SELECT * FROM hackathons WHERE status = '...'`

### UPDATE (Edit)
- **Where**: `/admin/upcoming` or `/admin/ongoing`
- **Action**: Click "Edit" → Modify form → Click "Update"
- **SQL**: `UPDATE hackathons SET ... WHERE id = ...`

### DELETE (Remove)
- **Where**: `/admin/upcoming` or `/admin/ongoing`
- **Action**: Click "Delete" → Confirm
- **SQL**: `DELETE FROM hackathons WHERE id = ...`

---

## 📋 Quick Reference

### Admin Login URL
```
http://localhost:3000/auth/login
```

### Admin Dashboard URL
```
http://localhost:3000/admin
```

### Table Name
```
hackathons
```

### Required Fields
- `name` (TEXT, NOT NULL)
- `start_date` (DATE, NOT NULL)
- `end_date` (DATE, NOT NULL)
- `status` (TEXT, NOT NULL, must be 'upcoming' or 'ongoing')

### Optional Fields
- `description`
- `image_url`
- `time`
- `mode` (must be 'Online', 'Offline', or 'Hybrid')
- `registration_link`

---

## ✅ Setup Checklist

- [ ] Supabase project created
- [ ] `hackathons` table created
- [ ] RLS enabled on table
- [ ] All 4 RLS policies created
- [ ] Admin user created in Supabase
- [ ] Admin user email confirmed
- [ ] `.env.local` file configured
- [ ] Can login at `/auth/login`
- [ ] Can access `/admin` dashboard
- [ ] Can add hackathons via form
- [ ] Can edit hackathons
- [ ] Can delete hackathons
- [ ] Users can view hackathons (read-only)

---

## 🆘 Troubleshooting

### Can't Login
- Verify user exists in Supabase Dashboard
- Check email/password are correct
- Ensure "Auto Confirm User" is enabled
- Check `.env.local` has correct Supabase credentials

### Can't Add Hackathons
- Verify you're logged in (check session)
- Check RLS policies are created
- Verify "Admin insert access" policy exists
- Check browser console for errors

### Table Not Found
- Verify table name is exactly `hackathons` (lowercase)
- Run CREATE TABLE SQL again
- Check Supabase Table Editor

---

**Need More Help?** Check `ADMIN_USER_FLOW.md` for detailed workflows!

