#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { EcsCdkStack } from '../lib/ecs-cdk-stack';

const app = new cdk.App();

const env = {
  region: 'us-east-1',
  account: '509173458563',
  stackName: 'MicroStack2'
};

new EcsCdkStack(app, env.stackName, { env });

