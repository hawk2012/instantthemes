<!DOCTYPE html>
<html lang="<?php echo $language_code; ?>">
<head>
    <meta charset="utf-8">
    <title><?php echo $this->getPageTitle(); ?></title>
    <meta name="description" content="<?php echo $this->getMetaDescription(); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <?php $this->addMainCSS("theme.css"); ?>
    <?php $this->addJS("theme.js"); ?>
    
    <?php echo $this->renderHead(); ?>
    
    <style>
        /* Additional IT-specific styles can go here */
        .tech-category {
            display: inline-block;
            background: linear-gradient(135deg, #1a2a6c, #3a6ea5);
            color: white;
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.8rem;
            margin-bottom: 0.5rem;
        }
        
        .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 1.5rem;
            margin: 2rem 0;
        }
        
        .feature-card {
            text-align: center;
            padding: 1.5rem;
        }
        
        .feature-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }
    </style>
</head>
<body class="<?php echo $body_class; ?>">
    <header class="header">
        <div class="container">
            <div class="row">
                <h1><?php echo html($config->sitename); ?></h1>
                <p><?php echo html($config->sitedesc); ?></p>
            </div>
        </div>
    </header>

    <nav class="navbar">
        <ul>
            <li><a href="/"><i class="icon-home"></i> Home</a></li>
            <li><a href="/content/"><i class="icon-folder"></i> Articles</a></li>
            <li><a href="/content/category/it-news/"><i class="icon-newspaper"></i> IT News</a></li>
            <li><a href="/content/category/tutorials/"><i class="icon-book"></i> Tutorials</a></li>
            <li><a href="/content/category/reviews/"><i class="icon-star"></i> Reviews</a></li>
            <li><a href="/about/"><i class="icon-info"></i> About</a></li>
        </ul>
    </nav>

    <div class="container">
        <main class="content">
            <?php if ($toolbar) { ?>
                <div class="toolbar">
                    <?php echo $toolbar; ?>
                </div>
            <?php } ?>

            <?php echo $breadcrumb; ?>

            <div class="content_wrap">
                <?php echo $content; ?>
            </div>
        </main>

        <aside class="sidebar">
            <div class="widget">
                <h3>IT Categories</h3>
                <ul>
                    <li><a href="/content/category/programming/">Programming</a></li>
                    <li><a href="/content/category/web-development/">Web Development</a></li>
                    <li><a href="/content/category/security/">Cybersecurity</a></li>
                    <li><a href="/content/category/cloud-computing/">Cloud Computing</a></li>
                    <li><a href="/content/category/artificial-intelligence/">AI & Machine Learning</a></li>
                </ul>
            </div>

            <div class="widget">
                <h3>Popular Tags</h3>
                <div class="tags">
                    <span class="tech-category">PHP</span>
                    <span class="tech-category">JavaScript</span>
                    <span class="tech-category">Python</span>
                    <span class="tech-category">CSS</span>
                    <span class="tech-category">API</span>
                    <span class="tech-category">Database</span>
                </div>
            </div>

            <div class="widget">
                <h3>Recent Articles</h3>
                <ul>
                    <li><a href="#">Understanding Microservices Architecture</a></li>
                    <li><a href="#">Best Practices for Cybersecurity in 2026</a></li>
                    <li><a href="#">Introduction to Containerization with Docker</a></li>
                </ul>
            </div>
        </aside>
    </div>

    <footer class="footer">
        <div class="container">
            <p>&copy; <?php echo date('Y'); ?> <?php echo html($config->sitename); ?>. All rights reserved.</p>
            <p>Powered by InstantCMS | IT Tech Theme</p>
        </div>
    </footer>

    <?php $this->renderAsset('body_end'); ?>
</body>
</html>