import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import BlogSidebar from '@theme/BlogSidebar';
import Translate, { translate } from "@docusaurus/Translate";

import type { Props } from '@theme/BlogLayout';

export default function BlogLayout(props: Props): ReactNode {
  const { sidebar, toc, children, ...layoutProps } = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;

  sidebar.title = translate({ message: "所有博文" });

  return (
    <Layout {...layoutProps}>
      <div className="container margin-vert--lg">
        <h1 className="hero__title">
          <Translate>博客</Translate>
        </h1>
        <p className="hero__subtitle">
          <Translate>随时看到来自 RevyOS 开发团队的重大消息</Translate>
        </p>

        <div className="row">
          <BlogSidebar sidebar={sidebar} />
          <main
            className={clsx("col", {
              "col--7": hasSidebar,
              "col--9 col--offset-1": !hasSidebar,
            })}
          >
            {children}
          </main>
          {toc && <div className="col col--2">{toc}</div>}
        </div>
      </div>
    </Layout>
  );
}
