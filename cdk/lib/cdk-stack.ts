import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as s3Deployment from '@aws-cdk/aws-s3-deployment';
import * as cloudfront from '@aws-cdk/aws-cloudfront';

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const myBucket = new s3.Bucket(this, 'website-bucket', {
      publicReadAccess: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      websiteIndexDocument: 'index.html'
    });

    const distribution = cloudfront.Distribution.fromDistributionAttributes(this, 'distribution', {
      distributionId: 'E2LHOMYUP6A8YP',
      domainName: 'https://d1w1jd8nu66c78.cloudfront.net'
    });

    new s3Deployment.BucketDeployment(this, 'deployStaticWebsite', {
      sources: [s3Deployment.Source.asset((`${__dirname}/../../webpage/build`))],
      destinationBucket: myBucket,
      distribution,
      distributionPaths: ['/*'],
    });
  }
}
