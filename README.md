# SwiftCart Enterprise Cloud Architecture - Platform Services Repository

> **Module**: ITS 2130 - Enterprise Cloud Architecture  
> **Institution**: Institute of Software Engineering (IJSE)  
> **Student Name**: Ruwani Ranthika  
> **Student Number**: HDSE-ECA-2026  
> **GCP Project ID**: `swiftcart-eca-project`  

---

## 📌 Project Description

This repository acts as the **Super-Repository (Parent Repository)** for the **Platform Services Layer** of the SwiftCart Enterprise E-Commerce Platform. It contains all core Spring Cloud microservice infrastructure services required for dynamic service discovery, centralized external configuration, and reactive API gateway routing.

### Managed Submodule Repositories:
- **`config-server`**: Centralized Spring Cloud Config Server backed by Git (`https://github.com/ruwani425/swiftcart-config-repo.git`).
- **`discovery-server`**: Spring Cloud Netflix Eureka Service Registry operating on Port `8761`.
- **`api-gateway`**: Spring Cloud Reactive API Gateway providing unified entry-point routing and CORS handling on Port `8080`.

---

## 🚀 Technology Stack

- **Java Version**: JDK 25 (`<java.version>25</java.version>`)
- **Framework**: Spring Boot 3.4.x, Spring Cloud 2024.0.0
- **Process Manager**: PM2 (`ecosystem.config.js`)
- **Cloud Infrastructure**: Google Cloud Platform (GCP)
  - Managed Instance Groups (MIG): `mig-platform` (Distributed across Multi-Zones)
  - Load Balancing: GCP Regional Internal Application Load Balancer (`lb-platform-config-server`)
  - Cloud DNS: Private DNS Zone (`zone-platform` / `config.platform`)
  - VPC & Subnetting: Custom VPC (`swiftcart-vpc`), Subnet (`swiftcart-subnet`)

---

## ⚙️ Setup & Getting Started Instructions

### 1. Clone with Submodules
To clone this super-repository along with all child submodules:
```bash
git clone --recurse-submodules https://github.com/ruwani425/swiftcart-platform-services.git
cd swiftcart-platform-services
```

### 2. Multi-Module Maven Build (JDK 25)
Build all platform microservice `.jar` files with a single command:
```bash
mvn clean package -DskipTests
```

### 3. Production Process Management via PM2
Start all 3 platform services using PM2:
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### 4. Health & Status Verification
Check PM2 realtime process metrics:
```bash
pm2 status
pm2 logs
```
Test Config Server endpoint:
```bash
curl http://localhost:9000/user-service/dev
```
