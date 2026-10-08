---
title: Recipes API
tagline: A Django REST API on AWS Fargate, built and torn down with Terraform
year: 2025
repo: https://github.com/Craigryy/recipes
stack:
  - Django REST Framework
  - Docker
  - Terraform
  - AWS Fargate
  - ECR
  - EFS
  - GitHub Actions
order: 5
---

A containerised Django REST service, with the AWS infrastructure behind it written as code.

- **Modular Terraform** (remote state in S3, locking in DynamoDB) creates the VPC, Fargate tasks, load balancer,
  EFS for media and IAM roles in one command.
- **AWS Vault** hands out short-lived credentials locally and in CI.
- **A GitHub Actions pipeline** builds the image, pushes it to ECR, runs `terraform plan` and `apply` on merge, and
  `terraform destroy` when a branch is cleaned up. Deploying or tearing down is one button.

The result is a repeatable workflow that keeps cloud costs under control and every change auditable.
