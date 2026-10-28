<?php

use CodeIgniter\Pager\PagerRenderer;

/**
 * @var PagerRenderer $pager
 */
$pager->setSurroundCount(2);
?>
<style>
    .pagination-capsule {
        background: #ffffff !important;
        border-radius: 50px !important;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06) !important;
        padding: 10px 24px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        width: 100% !important;
    }

    .pagination-list {
        list-style: none !important;
        margin: 0 !important;
        padding: 0 !important;
        display: inline-flex !important;
        align-items: center !important;
        gap: 6px !important;
    }

    .pagination-list .page-item {
        display: inline-flex !important;
        align-items: center !important;
        margin: 0 !important;
        padding: 0 !important;
    }

    .pagination-list .page-link {
        background: transparent !important;
        border: none !important;
        color: #64748b !important;
        font-weight: 500 !important;
        font-size: 14px !important;
        text-decoration: none !important;
        padding: 6px 12px !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        transition: all 0.2s ease-in-out !important;
        box-shadow: none !important;
        line-height: 1 !important;
    }

    .pagination-list .page-item:not(.active):not(.disabled) .page-link:hover {
        color: #5551ff !important;
    }

    .pagination-list .page-item.active .page-link {
        background-color: #069ff7f8 !important;
        color: #ffffff !important;
        border-radius: 50% !important;
        width: 34px !important;
        height: 34px !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        font-weight: 600 !important;
        padding: 0 !important;
        box-shadow: 0 4px 12px rgba(85, 81, 255, 0.4) !important;
    }

    .pagination-list .page-item.disabled .page-link-chevron {
        opacity: 0.35 !important;
        pointer-events: none !important;
        cursor: default !important;
    }

    .pagination-list .page-link-ellipsis {
        pointer-events: none !important;
        cursor: default !important;
        padding: 6px 8px !important;
    }
</style>

<div class="pagination-capsule">
    <ul class="pagination-list">
        <?php if ($pager->hasPreviousPage()) : ?>
            <li class="page-item">
                <a class="page-link page-link-chevron" href="<?= $pager->getPreviousPage(); ?>" aria-label="Previous">
                    &#10094;
                </a>
            </li>
        <?php else : ?>
            <li class="page-item disabled">
                <span class="page-link page-link-chevron">&#10094;</span>
            </li>
        <?php endif; ?>

        <?php if ($pager->hasPrevious()) : ?>
            <li class="page-item">
                <a class="page-link" href="<?= $pager->getFirst(); ?>">1</a>
            </li>
            <?php if ($pager->getFirstPageNumber() > 2) : ?>
                <li class="page-item disabled">
                    <span class="page-link page-link-ellipsis">...</span>
                </li>
            <?php endif; ?>
        <?php endif; ?>

        <?php foreach ($pager->links() as $link) : ?>
            <li class="page-item <?= $link['active'] ? 'active' : ''; ?>">
                <a class="page-link" href="<?= $link['uri']; ?>">
                    <?= $link['title']; ?>
                </a>
            </li>
        <?php endforeach; ?>

        <?php if ($pager->hasNext()) : ?>
            <?php if ($pager->getLastPageNumber() < $pager->getPageCount() - 1) : ?>
                <li class="page-item disabled">
                    <span class="page-link page-link-ellipsis">...</span>
                </li>
            <?php endif; ?>
            <li class="page-item">
                <a class="page-link" href="<?= $pager->getLast(); ?>"><?= $pager->getPageCount(); ?></a>
            </li>
        <?php endif; ?>

        <?php if ($pager->hasNextPage()) : ?>
            <li class="page-item">
                <a class="page-link page-link-chevron" href="<?= $pager->getNextPage(); ?>" aria-label="Next">
                    &#10095;
                </a>
            </li>
        <?php else : ?>
            <li class="page-item disabled">
                <span class="page-link page-link-chevron">&#10095;</span>
            </li>
        <?php endif; ?>
    </ul>
</div>