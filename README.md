# aws-orders
Order system that utilize AWS services 


🧭 Goal-Oriented AWS Learning Plan (4–6 Weeks)
🎯 End Goal: Be able to design, deploy, and manage scalable cloud applications using core AWS services.
✅ Week 1: AWS Core Foundations
🔸 Topics:
What is AWS? (Regions, AZs, Pricing Model)

IAM (Identity & Access Management)
- IAM Identity Center
  - aws organization
  - aws account
  - users
  - groups
  - permission sets
  - aws-cli
- IAM User (traditional)
  - user
  - group
  - role
  - Policy
  - Tag

S3 (Object Storage)
--profile AdministratorAccess-767397928537
  - general purpose bucket
  - s3 cli cmds
  - versions

EC2 (Virtual Machines)
  - IAM role


Basic AWS CLI & Console usage

🛠️ Hands-on:
Create an IAM user with permissions.

Upload/download files to S3.

Launch a basic EC2 instance and SSH into it.

Use AWS CLI to interact with services.

✅ Week 2: Serverless Basics & Lambda
🔸 Topics:
AWS Lambda fundamentals
  - Programming model
  - Environment model
  - permissions
    - aws service role -> lambda
      - policies
  - test
  - file systems
  - enviroment variables
  - versions
  - layers
  - response streaming
  - scale
  - vpc networks
    - subnets
    - security group
  - function urls
  - s3 trigger
  - 

VPC
  - Subnets
  - NAT gateway
  - Internet gateway
  - Security groups
    - inbound
    - outbound

RDS
  Managed RD platform
  - RDS proxy
  - 

API Gateway
  - API
    - resources
      - methods
        - integration functions
          - Lambda
    - tag
      - dev
      - prod
      - test
    - grey mode deploy
  

IAM roles for Lambda

API Gateway + Lambda



CloudWatch (logging)

🛠️ Hands-on:
Write a simple Lambda (e.g., "Hello World").

Trigger Lambda from API Gateway.

Log messages and view in CloudWatch.

Package and deploy Lambda with dependencies.

✅ Week 3: Application Development Stack
🔸 Topics:
DynamoDB (NoSQL DB)

RDS (Managed SQL DB)
  - Blue/Green Deployments

SSM Parameter Store / Secrets Manager

Environment variables in Lambda

🛠️ Hands-on:
Store user data in DynamoDB or RDS.

Use Lambda to read/write DB data.

Secure secrets with AWS Secrets Manager.

✅ Week 4: Infrastructure as Code + Deployment
🔸 Topics:
AWS CloudFormation basics

Serverless Framework or AWS SAM

S3 deployment buckets

CI/CD overview

🛠️ Hands-on:
Use SAM or Serverless Framework to deploy Lambda + API Gateway.

Store code and build pipeline in GitHub.

Deploy using a single command.

✅ Week 5: Event-Driven Architecture
🔸 Topics:
SQS (message queue)

SNS (notifications)

EventBridge (event routing)

Step Functions (workflows)

🛠️ Hands-on:
Trigger Lambda with SQS.

Publish events to SNS → notify another Lambda.

Create a simple Step Function workflow.

✅ Week 6: Real-World Mini Project + Security
🔸 Project Ideas:
User Management API: Create + Update users using Lambda + API Gateway + DynamoDB.

Order Processing System: Accept order → store in DB → trigger SQS → process → notify user.

🔒 Security:
Fine-grained IAM policies

Least privilege access

Logging & monitoring with CloudWatch

